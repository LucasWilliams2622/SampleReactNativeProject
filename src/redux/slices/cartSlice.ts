import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
const getData = [
  {
    id: 'shop01',
    name: 'Minh Anh Home',
    products: [
      {
        id: 1,
        name: 'Bánh Canh Cá Lóc Hành Phi',
        price: 20000,
        quantity: 1,
        shopId: 'shop01',
        price_sale: 18000,
      },
      {
        id: 2,
        name: 'Coca',
        price: 20000,
        quantity: 1,
        shopId: 'shop01',
        price_sale: 0,
      },
    ],
  },
];
type StoreInfo = {};

interface CartState {
  carts: Array<any>;
}
const initialState: CartState = {
  carts: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Array<any>>) => {
      state.carts = action.payload;
    },
    // setInfoStore: (state, action: PayloadAction<StoreInfo>) => {
    //   state.infoStore = action.payload;
    // },
  },
});
export const {setCart} = cartSlice.actions;
export const selectStore = (state: RootState) => state.cart;
export default cartSlice.reducer;
