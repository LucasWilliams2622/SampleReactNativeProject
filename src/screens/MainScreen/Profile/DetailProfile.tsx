import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from 'src/components/modals/GestureBottomSheet';
import {Button} from 'react-native';
import AppInput from 'src/components/inputs/AppInput';
import AppBottomSheet from 'src/components/modals/AppBottomSheet';

const DetailProfile = () => {
  const {height} = useWindowDimensions();
  const bottomSheetRef = useRef();
  const bottomSheetRef2 = useRef();
  const bottomSheetRef3 = useRef();
  const pressHandler = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);
  const pressHandler2 = useCallback(() => {
    bottomSheetRef2.current.expand();
  }, []);
  const pressHandler3 = useCallback(() => {
    bottomSheetRef3.current.expand();
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Button title="Blank" onPress={() => pressHandler()} />
        <Button title="Example 1" onPress={() => pressHandler2()} />
        <Button title="Example 2" onPress={() => pressHandler3()} />
        <Button title="Example 2" onPress={() => setShowModal(true)} />

        <BottomSheet
          ref={bottomSheetRef}
          activeHeight={height * 0.2}
          extraChildren={
            <View style={{borderWidth:3}}>

              <AppInput placeholder='adhasdnsak'/>
            </View>
          }
          children={
            <View style={{borderWidth:2}}>
              <AppInput />
            </View>
          }
          extraHeight={56} // for safe area in iOS device
         
        />
        <BottomSheet ref={bottomSheetRef2} activeHeight={height * 0.5}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={styles.imageContaier}>
              <Image
                source={{
                  uri: 'https://images.furnituredealer.net/img/products/best_home_furnishings/color/charmes-1781016745_2040dw-b1.jpg',
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Royal Palm Sofa</Text>
              <Text style={styles.text}>Vissle dark Blue/Kabusa dark Navy</Text>
              <Text style={styles.textPrice}>Price: $100</Text>
            </View>
            <View>
              <View>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>ADD TO CHART</Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet
          ref={bottomSheetRef3}
          activeHeight={height * 0.5}
          backgroundColor={'#FFFFFF'}
          backDropColor={'black'}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={styles.textContainer}>
              <Text style={styles.textExample2}>Good Evening</Text>
              <Text style={styles.textExample2}>Everyday is a good day</Text>
            </View>
            <View style={styles.imageContaierExample2}>
              <Text style={styles.textExample2}>Recommend</Text>
              <Image
                source={{
                  uri: 'https://images.furnituredealer.net/img/products/best_home_furnishings/color/charmes-1781016745_2040dw-b1.jpg',
                }}
                style={styles.imageExample2}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
      <AppBottomSheet
        visible={showModal}
        setVisible={setShowModal}
        hasClose
        child={
          <View>
            <AppInput />
          </View>
        }
      />
    </GestureHandlerRootView>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageContaier: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContaierExample2: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
  },
  imageExample2: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.65636588,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
  },
  buttonText: {
    color: '#DAD3C8',
  },
  textContainer: {
    marginHorizontal: 20,
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
  textExample2: {
    color: '#000000',
    fontSize: 26,
  },
  textPrice: {
    color: '#000000',
    marginVertical: 20,
    fontSize: 16,
  },
});
