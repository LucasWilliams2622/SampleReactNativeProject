import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// import immutableTransform from 'redux-persist-transform-immutable';i
import authSlice from './slices/authSlice';
import storeSlice from './slices/storeSlice';
import userSlice from './slices/userSlice';
import bankSlice from './slices/bankSlice';
import cartSlice from './slices/cartSlice';
import keyboardSlice from './slices/keyboardSlice';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const user = {
  key: 'user',
  storage: AsyncStorage,
};
const cart = {
  key: 'cart',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  store: storeSlice,
  bank: bankSlice,
  keyboard: keyboardSlice,
  user: persistReducer(user, userSlice),
  cart: persistReducer(cart, cartSlice),
});

export default rootReducer;
