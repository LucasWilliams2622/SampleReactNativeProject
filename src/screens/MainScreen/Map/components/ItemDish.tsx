import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DishProps} from 'src/AppType';
import NumericStepper from 'src/components/NumericStepper';
import {appStyle} from 'src/styles/appStyle';

const ItemDish = ({
  data,
  navigation,
  onDecrement,
  onIncrement,
  onValueChange,
}: {
  data: DishProps;
  navigation?: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onValueChange: (newQuantity: number) => void;
}) => {
  const {description, id, image, name, price, quantity} = data;

  return (
    <TouchableOpacity
      style={[appStyle.row, styles.container]}
      onPress={() => navigation.navigate('DetailDish', {id: id})}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.boxContent}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{price} VND</Text>
        <NumericStepper
          isInput
          value={quantity}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onValueChange={onValueChange}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemDish;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 2,
    marginRight: 16,
  },
  boxContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
