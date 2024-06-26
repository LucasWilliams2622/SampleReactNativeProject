import React from 'react';
import {View} from 'react-native';
import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {appStyle} from 'src/styles/appStyle';
export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'pink'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={appStyle.text16}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  custom: ({props}) => (
    <View
      style={[
        {
          height: 100,
          width: '100%',
          backgroundColor: 'white',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
          borderRadius: 10,
          justifyContent: 'center',
        },
        props.containerStyle,
      ]}>
      {props.child}
    </View>
  ),
};
