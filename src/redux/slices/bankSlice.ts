import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface BankStore {
  banks: Array<any>;
}
const initialState: BankStore = {
  banks: [],
};
const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    setBanks: (state, action: PayloadAction<Array<any>>) => {
      state.banks = action.payload;
    },
  },
});
export const {setBanks} = bankSlice.actions;
export const selectBank = (state: RootState) => state.bank;
export default bankSlice.reducer;
