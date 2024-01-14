import AsyncStorage from '@react-native-async-storage/async-storage';
import Rate, {AndroidMarket} from 'react-native-rate';
import ImagePicker from 'react-native-image-crop-picker';
import {Dimensions, Linking, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {appStyle, windowHeight, windowWidth} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import Clipboard from '@react-native-clipboard/clipboard';
import {TouchableOpacity} from 'react-native';
export const showToastMessage = (type?: string, title?: string, icon?: any) => {
  const topOffset = windowHeight * 0.5;
  const containerStyle = {
    width: windowWidth * 0.7,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  };

  const child = (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        minHeight: windowHeight * 0.1,
      }}
      onPress={() => {
        Toast.hide();
      }}>
      {/* <FastImage
        source={type === 'error' ? icons.cancelWhite : icon || icons.checkWhite}
        style={{height: 32, width: 32, marginTop: 20}}
      /> */}
      <Text
        style={[
          appStyle.text14SemiBold,
          {
            color: colors.textWhite,
            marginVertical: 16,
            width: '85%',
            textAlign: 'center',
          },
        ]}>
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
  const validdate = /^[0-9]+$/;
  return validdate.test(number);
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
export const checkPhoneNumber = (txt: string) => {
  const validdate = /^\d{10,11}$/;
  return validdate.test(txt);
};
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

export const squareImageSize = scale => {
  const {width, height} = Dimensions.get('window');
  return Math.min(width * scale, height * scale);
};

export const parseNumber = numberString => {
  return parseInt(numberString.replace(/,/g, ''));
};
export const parseAndFormatTime = inputTime => {
  const parsedDate = new Date(`2000-01-01T${inputTime}`);
  const formattedTime = parsedDate.toISOString();
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
      showToastMessage('', 'Cảm ơn bạn đã đánh giá');
    }
  });
};
