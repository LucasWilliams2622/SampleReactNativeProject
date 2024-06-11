import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from 'src/components/Container';
import AppHeader from 'src/components/headers/AppHeader';
import AppButton from 'src/components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import ItemDish from './components/ItemDish';
import {DishProps} from 'src/AppType';
const Map = () => {
  const navigation = useNavigation();
  const [listMenu, setListMenu] = useState<DishProps[]>([
    {
      id: 1,
      name: 'Bun bo Hue',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://product.hstatic.net/200000768759/product/tai_gan_cha_b119787ae71d48a9a20f64b8bdc13541_master.png',
    },
    {
      id: 2,
      name: 'Lẩu gà lá é',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://nhahangdalat.info/wp-content/uploads/2017/09/lau-ga-la-e-da-lat-nha-hang-memory-dalat-nhahangdalat.info-01.jpg',
    },
    {
      id: 3,
      name: 'Ramen',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/17eefccc0612317aa9f2ce1fbaae56cc/Derivates/3740e0c14b97c50890905a1961b9eb542959cc06.jpg',
    },
    {
      id: 4,
      name: 'Lẩu gà lá é',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://nhahangdalat.info/wp-content/uploads/2017/09/lau-ga-la-e-da-lat-nha-hang-memory-dalat-nhahangdalat.info-01.jpg',
    },
    {
      id: 5,
      name: 'Bun bo Hue',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://product.hstatic.net/200000768759/product/tai_gan_cha_b119787ae71d48a9a20f64b8bdc13541_master.png',
    },
    {
      id: 6,
      name: 'Lẩu gà lá é',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://nhahangdalat.info/wp-content/uploads/2017/09/lau-ga-la-e-da-lat-nha-hang-memory-dalat-nhahangdalat.info-01.jpg',
    },
    {
      id: 7,
      name: 'Ramen',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/17eefccc0612317aa9f2ce1fbaae56cc/Derivates/3740e0c14b97c50890905a1961b9eb542959cc06.jpg',
    },
    {
      id: 8,
      name: 'Lẩu gà lá é',
      description:
        'Sự dẻo dai, săn chắc của những con gà ta vùng đèo núi kết hợp cùng...',
      price: 60000,
      quantity: 0,
      image:
        'https://nhahangdalat.info/wp-content/uploads/2017/09/lau-ga-la-e-da-lat-nha-hang-memory-dalat-nhahangdalat.info-01.jpg',
    },
  ]);
  const handleIncrement = (item: DishProps) => {
    setListMenu(prevList =>
      prevList.map(dish =>
        dish.id === item.id ? {...dish, quantity: dish.quantity + 1} : dish,
      ),
    );
    console.log(`Incremented ${item.name} to ${item.quantity + 1}`);
  };

  const handleDecrement = (item: DishProps) => {
    if (item.quantity > 0) {
      setListMenu(prevList =>
        prevList.map(dish =>
          dish.id === item.id ? {...dish, quantity: dish.quantity - 1} : dish,
        ),
      );
      console.log(`Decremented ${item.name} to ${item.quantity - 1}`);
    }
  };

  const handleValueChange = (newQuantity: number, item: DishProps) => {
    setListMenu(prevList =>
      prevList.map(dish =>
        dish.id === item.id ? {...dish, quantity: newQuantity} : dish,
      ),
    );
    console.log(`Changed ${item.name} to ${newQuantity}`);
  };
  return (
    <Container>
      <AppHeader title="Map" />
      <AppButton
        title="Click"
        onPress={() => navigation.navigate('LocationPicker')}
      />
      <FlashList
        data={listMenu}
        showsVerticalScrollIndicator={false}
        shouldRasterizeIOS
        renderItem={({item}) => (
          <ItemDish
            data={item}
            navigation={navigation}
            onDecrement={() => handleDecrement(item)}
            onIncrement={() => handleIncrement(item)}
            onValueChange={(newQuantity: number) =>
              handleValueChange(newQuantity, item)
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

export default Map;

const styles = StyleSheet.create({});
