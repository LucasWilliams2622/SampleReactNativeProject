import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface KeyboardStore {
  heightKeyboard: number;
}
const initialState: KeyboardStore = {
  heightKeyboard: 0,
};
const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    setKeyboardHeight: (state, action: PayloadAction<number>) => {
      state.heightKeyboard = action.payload;
    },
  },
});
export const {setKeyboardHeight} = keyboardSlice.actions;
export const selectKeyboard = (state: RootState) => state.keyboard;
export default keyboardSlice.reducer;
