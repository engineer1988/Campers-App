import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => action.payload,
    clearSelectedItem: () => initialState,
  },
});

export const { setSelectedItem, clearSelectedItem } = selectedItemSlice.actions;

export const selectSelectedItem = state => state.selectedItem;

export default selectedItemSlice.reducer;
