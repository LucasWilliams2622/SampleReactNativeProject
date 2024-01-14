import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface AuthState {
  isSignIn: boolean;
  token: string;
}
const initialState: AuthState = {
  isSignIn: false,
  token: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSignIn: (state, action: PayloadAction<boolean>) => {
      state.isSignIn = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});
export const {setIsSignIn, setToken} = authSlice.actions;
export const selectAuthenticate = (state: RootState) => state.auth;
export default authSlice.reducer;
