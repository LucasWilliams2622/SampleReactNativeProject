import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import AppHeader from 'src/components/headers/AppHeader';
import {useAppDispatch} from 'src/redux/hook';
import {appStyle, windowHeight, windowWidth} from 'src/styles/appStyle';
import {colors} from 'styles/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import RNQRGenerator from 'rn-qr-generator';
import {showToastMessage} from 'src/utils';

const {width, height} = Dimensions.get('window');
const CAM_VIEW_HEIGHT = Dimensions.get('screen').width * 1.5;
const CAM_VIEW_WIDTH = Dimensions.get('screen').width;
const leftMargin = 100;
// top
const topMargin = 50;
// width (height of portrait orientation)
const frameWidth = 200;
// height (width of portrait orientation)
const frameHeight = 250;
const scanAreaX = leftMargin / CAM_VIEW_HEIGHT;
const scanAreaY = topMargin / CAM_VIEW_WIDTH;
const scanAreaWidth = frameWidth / CAM_VIEW_HEIGHT;
const scanAreaHeight = frameHeight / CAM_VIEW_WIDTH;

const Dot = '#Dddddd';
const colorLine = '#CCCCCC';
const landmarkSize = 3;
type Props = {
  route: any;
};
const ScanBarCode = React.memo<Props>(({route}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [flashOn, setFlashOn] = useState(false);

  const [scannedData, setScannedData] = useState(null);

  // Function to handle successful QR code scanning
  const onSuccess = (value: any) => {
    console.log(value);
    if (value[0] == null) {
      showToastMessage('error', 'Ảnh không hợp lệ');
    }
    setScannedData(value[0]);
    // if (e?.data) {
    //   let data = e?.data;
    //   try {
    //     data = JSON.parse(data);
    //   } catch (ex) {}

    //   // Set the scanned data to the state
    //   console.log("======",data[0]);

    //   if (route?.params.handleDataQR) {
    //     route?.params.handleDataQR(e.data);
    //   }

    //   // navigation.goBack();
    // }
  };

  const handleScanQR = (value: any) => {
    try {
      console.log(value.data);
      setScannedData(value.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCamera = () => {
    const {height, width} = Dimensions.get('window');

    return (
      <RNCamera
        flashMode={flashOn ? 'torch' : 'off'}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        captureAudio={false}
        autoFocusPointOfInterest={{x: 0.2, y: 0.2}}
        onBarCodeRead={data => handleScanQR(data)}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        style={{
          width: width * 1,
          height: width * 1,
          alignSelf: 'center',
          overflow: 'hidden',
          flex: 1,
        }}>
        <View style={[styles.maskCenter, {flexDirection: 'row'}]}>
          <View style={[styles.maskInner]}>
            <Image
              style={{
                width: 40,
                height: 40,
                marginLeft: 40,
                marginTop: 100,
                transform: [{rotateY: '180deg'}, {rotateX: '180deg'}],
              }}
              source={require('./icon.png')}
            />
            <Image
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                bottom: 150,
                left: 40,
                transform: [{rotateY: '180deg'}, {rotateX: '0deg'}],
              }}
              source={require('./icon.png')}
            />
            <Image
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                bottom: 150,
                right: 40,
                transform: [{rotateY: '0deg'}, {rotateX: '0deg'}],
              }}
              source={require('./icon.png')}
            />
            <Image
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                top: 100,
                right: 40,
                transform: [{rotateY: '0deg'}, {rotateX: '180deg'}],
              }}
              source={require('./icon.png')}
            />
          </View>
        </View>
      </RNCamera>
    );
  };

  const handleChooseImage = () => {
    launchImageLibrary({}, response => {
      if (!response.didCancel) {
        console.log('response', response?.assets[0]?.uri);
        handleQRCodeScanning(response.assets[0].uri);
      } else {
        showToastMessage('error', 'Huỷ chọn ảnh');
      }
    });
  };

  const handleQRCodeScanning = async imageUri => {
    try {
      // console.log('imageUri', imageUri);
      RNQRGenerator.detect({
        uri: imageUri,
      })
        .then(response => {
          const {values} = response; // Array of detected QR code values. Empty if nothing found.
          onSuccess(values);
        })
        .catch(error => console.log('Cannot detect QR code in image', error));
    } catch (error) {
      console.error('Error scanning QR code from image:', error);
    }
  };

  return (
    <SafeAreaView style={appStyle.container}>
      <AppHeader title="Quét mã QR" />

      <View style={{flex: 1}}>
        {renderCamera()}
        {route?.params?.image ? (
          <Image
            style={{
              width: '100%',
              height: 105,
              resizeMode: 'contain',
            }}
            source={{uri: route?.params?.image}}
          />
        ) : null}

        <View
          style={{
            position: 'absolute',
            bottom: windowHeight * 0.2,
            alignSelf: 'center',
          }}>
          <Text style={[appStyle.text14SemiBold, {color: colors.white}]}>
            {scannedData}
          </Text>
        </View>

        <Text style={[appStyle.text16SemiBold, styles.textDes]}>
          {route?.params?.desc ? route?.params?.desc : 'qr_code_description'}
        </Text>
        {/* <View style={styles.boxBottom}>
          <TouchableOpacity
            style={styles.btnChoosseImage}
            onPress={handleChooseImage}>
            <Icon
              name="folder-images"
              type={IconType.Entypo}
              size={30}
              color={colors.white}
            />
            <Text
              style={[
                appStyle.text14SemiBold,
                {color: colors.white, marginTop: 6},
              ]}>
              Chọn ảnh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnChoosseImage, {}]}
            onPress={() => setFlashOn(!flashOn)}>
            <Icon
              name="lightbulb"
              type={IconType.MaterialCommunityIcons}
              size={30}
              color={flashOn ? colors.yellow : colors.white}
            />
            <Text
              style={[
                appStyle.text14SemiBold,
                {color: colors.white, marginTop: 6},
              ]}>
              {flashOn ? 'Tắt đèn' : 'Mở đèn'}
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  maskInner: {
    width: width * 1,
    height: width * 1.5,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  maskFrame: {
    backgroundColor: 'rgba(18,18,18,0.8)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {flexDirection: 'row', overflow: 'hidden'},
  btnChoosseImage: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'white',
    width: '30%',
    padding: 14,
  },
  boxBottom: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textDes: {
    position: 'absolute',
    color: colors.textWhite,
    width: windowWidth * 0.8,
    alignSelf: 'center',
    top: 32,
    textAlign: 'center',
  },
});
export default ScanBarCode;
