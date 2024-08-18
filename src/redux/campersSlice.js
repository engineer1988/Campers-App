import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';
import { selectNameFilter } from './filtersSlice';

const campersInitialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const newItems = action.payload.filter(
          newItem => !state.items.some(item => item._id === newItem._id)
        );

        state.items = [...state.items, ...newItems];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
export const selectCampers = state => {
  return state.campers.items;
};

export const selectFilteredContacts = createSelector(
  [selectCampers, selectNameFilter],
  (dataContacts, dataNameFilter) => {
    return dataContacts.filter(contact =>
      contact.name.toLowerCase().includes(dataNameFilter.toLowerCase())
    );
  }
);

export const selectLoading = state => state.campers.loading;

export const selectError = state => state.campers.error;

export const campersReducer = campersSlice.reducer;
