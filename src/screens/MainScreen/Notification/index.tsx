import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from 'src/components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'

const Notification = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Notification</Text>
      <AppButton title='Range Slider' onPress={()=>navigation.navigate('RangeSliderScreen')}/>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})