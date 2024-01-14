import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {BottomSheet} from 'react-native-btr';
import {appStyle, windowHeight} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import {icons} from 'src/assets/icons/icons';
import {ImagePickerComponentProps} from './type';
import FastImage from 'react-native-fast-image';
import {images} from 'src/assets/images/images';
import {squareImageSize} from 'src/utils';
const ImagePickerComponent = ({
  containerStyle,
  titleStyle,
  title = 'Chọn ảnh',
  backgroundColor = colors.background,
  textColor = colors.text,
  borderColor = colors.borderColor,
  width = squareImageSize(0.25),
  height = squareImageSize(0.25),
  widthIcon = 50,
  heightIcon = 50,
  alignSelf = 'center',
  borderRadius = 12,
  disabled = false,
  setImg,
  imageUrl,
  imageDefault,
  onImageSelected,
}: ImagePickerComponentProps) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const pickImageFromGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
      });
      console.log('image picker', image);

      setSelectedImage({uri: image.path});
      // setFilenameImg({filename: image.filename});
      onImageSelected && onImageSelected(image.path);
      setImg({
        type: image.mime,
        name:
          Platform.OS === 'ios'
            ? image.filename
            : image.modificationDate + '.jpg',
        uri: image.path,
      });

      setBottomSheetVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const captureImage = async () => {
    try {
      const image = await ImagePicker.openCamera({
        cropping: true,
      });
      setSelectedImage({uri: image.path});
      console.log('image', image);

      onImageSelected && onImageSelected(image.path);
      setImg({
        type: image.mime,
        name:
          Platform.OS === 'ios'
            ? image.filename
            : image.modificationDate + '.PNG',
        uri: image.path,
      });
      setBottomSheetVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <>
      {disabled ? (
        <FastImage
          source={{uri: imageUrl ? imageUrl : selectedImage.uri}}
          style={[
            {
              width: width,
              height: height,
              marginVertical: 24,
              borderRadius: borderRadius,
            },
            containerStyle,
          ]}
          resizeMode="stretch"
        />
      ) : (
        <TouchableOpacity onPress={openBottomSheet}>
          {!selectedImage ? (
            <View>
              {imageDefault ? (
                <View
                  style={[
                    {
                      alignSelf: alignSelf,
                      alignItems: 'center',
                      marginBottom: 20,
                      borderWidth: 1,
                      borderRadius: borderRadius,
                      width: width,
                      height: height,
                    },
                  ]}>
                  <FastImage
                    source={images.avatar}
                    style={appStyle.mediumAvatar}>
                    <View
                      style={[
                        appStyle.mediumAvatar,
                        styles.overlay,
                        appStyle.boxCenter,
                      ]}>
                      <FastImage
                        source={icons.whiteCamera}
                        style={styles.icon}
                        tintColor={'white'}
                      />
                    </View>
                  </FastImage>
                </View>
              ) : (
                <View
                  style={[
                    styles.boxCamera,
                    {
                      alignSelf: alignSelf,
                      alignItems: 'center',
                      borderRadius: borderRadius,
                      borderColor: borderColor,
                      width: width,
                      height: height,
                      backgroundColor: backgroundColor,
                    },
                    containerStyle,
                  ]}>
                  <FastImage
                    style={{width: widthIcon, height: heightIcon}}
                    source={icons.addCamera}
                  />
                  <Text
                    style={[
                      appStyle.text12Medium,
                      {marginTop: 8, color: textColor},
                      titleStyle,
                    ]}>
                    {title}
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <FastImage
              source={{uri: imageUrl ? imageUrl : selectedImage.uri}}
              style={[
                {
                  width: width,
                  height: height,
                  borderRadius: borderRadius,
                },
              ]}
              resizeMode="stretch"
            />
          )}
        </TouchableOpacity>
      )}

      <BottomSheet
        visible={bottomSheetVisible}
        onBackButtonPress={closeBottomSheet}
        onBackdropPress={closeBottomSheet}>
        <View
          style={[
            appStyle.modalContentBottom,
            {
              height: windowHeight * 0.25,
              alignItems: 'center',
              justifyContent: 'space-around',
            },
          ]}>
          <Text style={[appStyle.text20, {width: '100%', textAlign: 'center'}]}>
            Chọn hình ảnh
          </Text>
          <TouchableOpacity onPress={pickImageFromGallery}>
            <Text style={[appStyle.text16, {color: colors.textBlue}]}>
              Chọn từ thư viện
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={captureImage}>
            <Text style={[appStyle.text16, {color: colors.textBlue}]}>
              Chụp ảnh mới
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text style={[appStyle.text16, {color: 'red'}]}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};
const styles = StyleSheet.create({
  boxCamera: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.6,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default ImagePickerComponent;
