import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {BottomSheet} from 'react-native-btr';
import {appStyle, isTablet, windowHeight} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import {icons} from 'src/assets/icons/icons';
import {ImagePickerComponentProps} from './type';
import FastImage from 'react-native-fast-image';
import {squareImageSize} from 'src/utils';
import ImageView from 'react-native-image-viewing';

const ImagePickerComponent = ({
  containerStyle,
  outsideStyle,
  titleStyle,
  title = 'Chọn ảnh',
  backgroundColor = colors.background,
  textColor = colors.text,
  borderColor = colors.borderColor,

  width = isTablet ? squareImageSize(0.2) : squareImageSize(0.25),
  height = isTablet ? squareImageSize(0.2) : squareImageSize(0.25),

  widthPicker = 200,
  heightPicker = 200,
  widthIcon = 50,
  heightIcon = 50,

  alignSelf = 'center',
  borderRadius = 12,
  disabled = false,
  setImg,
  imageUrl = '',
  imageDefault,
  onImageSelected,
  cropEnabled = true,
  multiple = false,
}: ImagePickerComponentProps) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isImageViewVisible, setImageViewVisible] = useState(false);

  const openImageView = () => {
    setImageViewVisible(true);
  };
  const pickImageFromGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        freeStyleCropEnabled: heightPicker || widthPicker ? false : cropEnabled,
        width: widthPicker,
        height: heightPicker,
        multiple: multiple,
        cropping: cropEnabled,
        compressImageMaxWidth: widthPicker,
        compressImageMaxHeight: heightPicker,
        compressImageQuality: Platform.OS === 'ios' ? 0.8 : 1,
      });
      console.log('image picker', image);
      console.log('Dung lượng sau khi nén:', image?.size); // Kiểm tra dung lượng sau khi nén
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
        freeStyleCropEnabled: heightPicker || widthPicker ? false : cropEnabled,
        //width: widthPicker,
        //height: heightPicker,
        multiple: multiple,
        cropping: cropEnabled,
        compressImageMaxWidth: widthPicker * 5,
        compressImageMaxHeight: heightPicker * 5,
        compressImageQuality: Platform.OS === 'ios' ? 0.8 : 1,
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

  useEffect(() => {
    setSelectedImage(imageUrl);
    return () => {};
  }, [imageUrl]);
  return (
    <View style={[outsideStyle]}>
      {disabled ? (
        <Pressable onPress={openImageView}>
          <FastImage
            source={{uri: imageUrl ? imageUrl : selectedImage?.uri}}
            style={[
              {
                width: width,
                height: height,
                marginVertical: 24,
                borderRadius: borderRadius,
                alignSelf: alignSelf,
              },
              containerStyle,
            ]}
            resizeMode="stretch"
          />
          <ImageView
            images={[{uri: imageUrl ? imageUrl : selectedImage?.uri}]}
            imageIndex={0}
            visible={isImageViewVisible}
            onRequestClose={() => setImageViewVisible(false)}
          />
        </Pressable>
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
                    source={{uri:'https://www.dell.com/wp-uploads/2022/11/Human-like-Avatar-3-640x480.jpg'}}
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
                    ]}
                    numberOfLines={1}>
                    {title}
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <FastImage
              source={{uri: imageUrl ? imageUrl : selectedImage?.uri}}
              style={[
                {
                  width: width,
                  height: height,
                  borderRadius: borderRadius,
                  alignSelf: alignSelf,
                  borderWidth: 0.5,
                  borderColor: colors.borderColor,
                },
              ]}
              resizeMode="contain"
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
              height: isTablet ? windowHeight * 0.4 : windowHeight * 0.25,
              alignItems: 'center',
              justifyContent: 'space-around',
            },
          ]}>
          <ImageView
            images={[{uri: imageUrl ? imageUrl : selectedImage?.uri}]}
            imageIndex={0}
            visible={isImageViewVisible}
            onRequestClose={() => setImageViewVisible(false)}
          />
          <Text style={[appStyle.text20, {width: '100%', textAlign: 'center'}]}>
            Chọn hình ảnh
          </Text>
          <TouchableOpacity onPress={() => pickImageFromGallery()}>
            <Text style={[appStyle.text16, {color: colors.textBlue}]}>
              Chọn từ thư viện
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={captureImage}>
            <Text style={[appStyle.text16, {color: colors.textBlue}]}>
              Chụp ảnh mới
            </Text>
          </TouchableOpacity>
          {imageUrl && (
            <TouchableOpacity onPress={() => openImageView()}>
              <Text style={[appStyle.text16, {color: colors.textBlue}]}>
                Xem ảnh
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text style={[appStyle.text16, {color: 'red'}]}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
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
