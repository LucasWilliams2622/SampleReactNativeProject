import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity, 
  PermissionsAndroid,
  StyleSheet,
  Platform,
} from 'react-native';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import MapView, {Circle, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {appStyle, windowHeight} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import AppButton from 'src/components/buttons/AppButton';
import {showToastMessage} from 'src/utils';

const LocationPicker = props => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [mapRef, setMapRef] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [circleRadius, setCircleRadius] = useState(1000);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    requestLocationPermission();
  }, [isFocused]);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Đồng ý cho phép truy cập vị trí',
            message: 'Hãy cấp quyền cho App',
            buttonNeutral: 'Hỏi tôi sau',
            buttonNegative: 'Hủy',
            buttonPositive: 'Đồng ý',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await getCurrentLocation();
        } else {
          console.log('Location permission denied android');
        }
      } else if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        console.log('result', result);
        await getCurrentLocation();
        if (result === RESULTS.GRANTED) {
          await getCurrentLocation();
        } else {
          console.log('Location permission denied ios');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setMarkerPosition({latitude, longitude});
        convertCoordinatesToAddress(latitude, longitude);
        getRouteCoordinates(latitude, longitude, 10.830039, 106.6468731); // Pass destination coordinates
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const convertCoordinatesToAddress = (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    fetch(url)
      .then(response => response.json())
      .then(data => { 
        const address = data.display_name;
        console.log(address);
        setAddress(address);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getRouteCoordinates = async (startLat, startLng, endLat, endLng) => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${endLat},${endLng}&key=AIzaSyAdITfsCLtJZiPJW6CeSzbBEw-1QdUEFfw`);
      const data = await response.json();
      const route = data.routes[0].overview_polyline.points;
      const coords = decodePolyline(route);
      setRouteCoordinates(coords);
    } catch (error) {
      console.error('Error fetching route coordinates:', error);
    }
  };

  const decodePolyline = encoded => {
    let poly = [];
    let index = 0;
    let len = encoded.length;
    let lat = 0;
    let lng = 0;

    while (index < len) {
      let b;
      let shift = 0;
      let result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      let p = {
        latitude: lat / 1e5,
        longitude: lng / 1e5,
      };
      poly.push(p);
    }
    return poly;
  };

  const handleAddressPress = () => {
    if (markerPosition && mapRef) {
      const {latitude, longitude} = markerPosition;
      const region = {
        latitude,
        longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      };
      mapRef.animateToRegion(region, 1000); // Adjust the duration as needed
    }
  };

  const handleMarkerPress = event => {
    const {coordinate} = event.nativeEvent;
    setMarkerPosition(coordinate);
    convertCoordinatesToAddress(coordinate.latitude, coordinate.longitude);
  };

  const handleGetAddress = () => {
    const data = {
      markerPosition: markerPosition,
      address: address,
    };
    showToastMessage('', 'Lấy vị trí thành công');
  };

  const handleGetCurrentLocation = async () => {
    await getCurrentLocation();
    const data = {
      markerPosition: markerPosition,
      address: address,
    };
    showToastMessage('', 'Lấy vị trí thành công');
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={ref => {
          setMapRef(ref);
          // console.log('LocationPicker reference set:', ref);
        }}
        style={{flex: 1}}
        initialRegion={{
          latitude: markerPosition?.latitude || 10.7769,
          longitude: markerPosition?.longitude || 106.7009,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={event => handleMarkerPress(event)}>
        {markerPosition && <Marker coordinate={markerPosition} />}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
        {markerPosition && (
          <Circle
            center={markerPosition}
            radius={circleRadius}
            strokeColor={'rgba(158, 158, 255, 1)'}
            fillColor={'rgba(158, 158, 255, 0.3)'}
          />
        )}
      </MapView>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.boxBack}>
          <Icon
            name="arrow-back-circle-outline"
            type={IconType.Ionicons}
            size={32}
            color={colors.primary}
            style={{position: 'absolute'}}
          />
        </View>
        <Text style={[appStyle.text14Bold, {color: colors.primary}]}>
          Quay lại
        </Text>
        <View style={{width: '10%'}} />
      </TouchableOpacity>

      {address !== '' && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 80,
            alignSelf: 'center',
            padding: 12,
            backgroundColor: 'white',
            borderRadius: 8,
            width: '94%',
          }}
          onPress={handleAddressPress}>
          <Text style={appStyle.text12Bold}>{address}</Text>
        </TouchableOpacity>
      )}
      <View
        style={[
          appStyle.rowBtw,
          {
            bottom: 24,
            position: 'absolute',
            alignSelf: 'center',
            width: '94%',
          },
        ]}>
        <AppButton
          width={'48%'}
          onPress={handleGetCurrentLocation}
          containerStyle={{}}
          title="Lấy vị trí hiện tại"
        />
        <AppButton
          width={'48%'}
          backgroundColor="white"
          textColor={colors.primary}
          onPress={handleGetAddress}
          containerStyle={{}}
          title="Lấy vị trí"
        />
      </View>
    </View>
  );
};

export default LocationPicker;
const styles = StyleSheet.create({
  boxBack: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBack: {
    position: 'absolute',
    top: windowHeight * 0.04,
    width: '74%',
    alignSelf: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
});
