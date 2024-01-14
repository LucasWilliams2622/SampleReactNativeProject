import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type UserInfo = {
  fullname: string;
  user_id: string;
  phone: string;
  avatar: string;
  role: string;
  email: string;
  referral_code: string;
  username: string;
  wallet_address: string;
};

interface UserStore {
  userId: string;
  userInfo: UserInfo;
}
const initialState: UserStore = {
  userId: '',
  userInfo: {
    fullname: '',
    user_id: '',
    phone: '',
    avatar: '',
    role: 'user',
    email: '',
    referral_code: '',
    username: '',
    wallet_address: '',
  },
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});
export const {setUserId, setUserInfo} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
