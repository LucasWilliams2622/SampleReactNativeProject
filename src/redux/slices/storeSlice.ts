import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type StoreInfo = {
  id: string;
  address: string;
  bussiness: string;
  created_date: string;
  district: string;
  id_user: string;
  name: string;
  phone: string;
  province: string;
  street: string;
  ward: string;
  package_name: string;
  tried_it: boolean;
  city_id: number;
  district_id: number;
  ward_id: number;
};

interface StoreState {
  shopId: string;
  infoStore: StoreInfo;
}
const initialState: StoreState = {
  shopId: '',
  infoStore: {
    id: '',
    address: '',
    bussiness: '',
    created_date: '',
    district: '',
    id_user: '',
    name: '',
    phone: '',
    province: '',
    street: '',
    ward: '',
    package_name: '',
    city_id: -1,
    district_id: -1,
    ward_id: -1,
    tried_it: false,
  },
};
const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setShopId: (state, action: PayloadAction<string>) => {
      state.shopId = action.payload;
    },
    setInfoStore: (state, action: PayloadAction<StoreInfo>) => {
      state.infoStore = action.payload;
    },
  },
});
export const {setShopId, setInfoStore} = storeSlice.actions;
export const selectStore = (state: RootState) => state.store;
export default storeSlice.reducer;
