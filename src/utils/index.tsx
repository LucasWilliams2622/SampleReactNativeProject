import AsyncStorage from '@react-native-async-storage/async-storage';
import Rate, {AndroidMarket} from 'react-native-rate';
import ImagePicker from 'react-native-image-crop-picker';
import {Dimensions, Linking, StyleSheet, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  appStyle,
  isTablet,
  windowHeight,
  windowWidth,
} from 'src/styles/appStyle';
import FastImage from 'react-native-fast-image';
import {icons} from 'src/assets/icons/icons';
import Clipboard from '@react-native-clipboard/clipboard';
import {TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoding from 'react-native-geocoding';
import moment from 'moment';
Geocoding.init('AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8');

export const showToastMessage = (
  type?: string,
  title?: string,
  width?: any,
  icon?: any,
) => {
  const topOffset = isTablet ? windowHeight * 0.3 : windowHeight * 0.14;

  const toastWidth = width
    ? width
    : isTablet
    ? windowWidth * 0.4
    : windowWidth * 0.7;
  const containerStyle = {
    width: toastWidth,
    minHeight: isTablet ? windowWidth * 0.14 : windowHeight * 0.12,
    // backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: '#ffffff',
    borderRadius: isTablet ? 16 : 8,
  };

  const child = (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        Toast.hide();
      }}>
      <FastImage
        source={type === 'error' ? icons.cancel : icon || icons.check}
        style={styles.iconToast}
      />
      <Text
        style={[appStyle.text14SemiBold, styles.textToast]}
        numberOfLines={3}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  Toast.show({
    topOffset,
    type: 'custom',
    visibilityTime: 2500,
    autoHide: true,
    position: 'top',

    props: {
      containerStyle,
      child,
    },
  });
};

export const checkNumberValidate = (number: string) => {
  const validate = /^[0-9]+(\.[0-9]+)?$/;
  return validate.test(number);
};

export const checkCharacter = (text: string) => {
  const validdate = /[a-zA-Z]/g;
  return validdate.test(text);
};
export const checkEmail = (txt: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(txt);
};
export const handleSearch = (list: Array<any>, txt: string, key: string) => {
  const str = txt
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  let filtered = list.filter(item => {
    const arr = str.toLowerCase().split(' ');
    return arr.some(el => item[key].toLowerCase().includes(el));
  });
  return filtered;
};

export function checkPhoneNumber(phoneNumber: string): boolean {
  const regex = /^(?:\+?84|0)(?:\d){9,10}$/;
  return regex.test(phoneNumber);
}
export const getStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('storage error: ', e);
  }
};
export const setStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('storage error: ', e);
  }
};
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const selectImage = async (
  width: number,
  height: number,
  // setImg: any,
) => {
  let img;
  await ImagePicker.openPicker({
    width: width,
    height: height,
    cropping: true,
  }).then(image => {
    // setImg(image);
    img = image;
  });
  return img;
};
export const openPhone = (phone: string) => {
  Linking.openURL(`tel:${phone}`);
};
export const openSMS = (phone: string) => {
  const smsUrl = `sms:${phone}`;

  Linking.canOpenURL(smsUrl).then(supported => {
    if (supported) {
      return Linking.openURL(smsUrl);
    } else {
      console.error('SMS không được hỗ trợ');
    }
  });
};
export const createForm = (data: any) => {
  const form = new FormData();
  for (let key in data) {
    form.append(key, data[key]);
  }
  return form;
};
export const sumArray = (arr: Array<any>, key: string) => {
  return arr.reduce((acc, curr) => Number(curr[key]) + acc, 0);
};
export const handleCopyToClipboard = (textToCopy: string) => {
  Clipboard.setString(textToCopy);
  showToastMessage('', 'Đã sao chép thành công!');
};

export const squareImageSize = (scale: number) => {
  const {width, height} = Dimensions.get('window');
  return Math.min(width * scale, height * scale);
};

export const parseNumber = (numberString: any) => {
  return parseInt(numberString.replace(/,/g, ''), 10);
};
export const parseAndFormatTime = (inputTime: any) => {
  const parsedDate = new Date(`2000-01-01T${inputTime}`);
  const formattedTime = parsedDate.toISOString();
  return formattedTime;
};
export const formatMinutesToHHMM = (minutes: any) => {
  // Chia tổng số phút thành giờ và phút
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  // Định dạng giờ và phút thành chuỗi HH:mm
  const formattedTime = `${hours.toString().padStart(2, '0')}:${remainingMinutes
    .toString()
    .padStart(2, '0')}`;

  return formattedTime;
};
export const ratingApp = () => {
  const options = {
    AppleAppID: '6472865637',
    GooglePackageName: 'com.islink',
    AmazonPackageName: 'com.islink',
    OtherAndroidURL: 'https://play.google.com/store/apps/details?id=com.islink',
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: false,
    openAppStoreIfInAppFails: true,
    fallbackPlatformURL:
      'https://play.google.com/store/apps/details?id=com.islink',
  };

  Rate.rate(options, success => {
    if (success) {
      showToastMessage('', 'Cảm ơn bạn đã đánh giá Link');
    }
  });
};

export const getCurrentLocation = async () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;

        // Lấy địa chỉ từ vị trí
        try {
          const addressResponse = await Geocoding.from({latitude, longitude});
          console.log('addressResponse', addressResponse);

          const address = addressResponse.results[0].formatted_address;
          resolve({latitude, longitude, address});
        } catch (error) {
          console.log('Error getting address:', error);
          resolve({latitude, longitude, address: 'N/A'});
        }
      },
      error => {
        console.log('Error getting location:', error);
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
};
export function removeDiacritics(str: any) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
export function formatVNMoney(number: number) {
  // Kiểm tra nếu số đầu vào nhỏ hơn 1000 thì trả về giá trị định dạng số có dấu chấm phân cách
  if (number < 1000) {
    return new Intl.NumberFormat().format(number);
  } else {
    // Tính số chữ số của số đầu vào
    const digits = Math.floor(Math.log10(number)) + 1;

    // Nếu số chữ số lớn hơn hoặc bằng 10 (1 tỷ trở lên)
    if (digits >= 10) {
      const billion = Math.floor(number / 1000000000);
      const million = Math.floor((number % 1000000000) / 1000000);
      return `${billion} tỷ ${million} tr`;
    } else {
      // Nếu số chữ số lớn hơn 6 thì chuyển thành dạng 7tr3, nếu không thì giữ nguyên
      if (digits > 6) {
        const million = Math.floor(number / 1000000);
        const thousand = Math.floor((number % 1000000) / 1000);
        let result = '';
        if (million !== 0) {
          result += `${million} tr `;
        }
        if (thousand !== 0) {
          result += `${thousand} k`;
        }
        return result.trim();
      } else {
        return new Intl.NumberFormat().format(number);
      }
    }
  }
}
export const currentDate = moment().format('DD/MM/YYYY');

export const handleChangeObject = (key: string, value: any, setData: any) => {
  setData((pre: any) => ({...pre, [key]: value}));
};

const styles = StyleSheet.create({
  iconToast: {
    height: isTablet ? squareImageSize(0.05) : squareImageSize(0.06),
    width: isTablet ? squareImageSize(0.05) : squareImageSize(0.06),
    marginTop: 20,
    tintColor:'green'
  },
  textToast: {
    color: '#000000',
    marginVertical: 16,
    width: '85%',
    textAlign: 'center',
  },
});
