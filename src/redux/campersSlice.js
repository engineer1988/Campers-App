import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';
// import { deleteFavoriteCamper } from './campersOps';
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
      // .addCase(fetchCampers.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.items = [...state.items, ...action.payload];
      // })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        // Уникальные элементы по id
        const newItems = action.payload.filter(
          newItem => !state.items.some(item => item._id === newItem._id)
        );

        // Добавляем только уникальные элементы
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
// ======================================================
// import { createSlice, createSelector } from '@reduxjs/toolkit';
// import { fetchCampers } from './campersOps';
// import { selectNameFilter } from './filtersSlice';

// const campersInitialState = {
//   items: [],
//   favorites: [],
//   loading: false,
//   error: null,
// };

// const campersSlice = createSlice({
//   name: 'campers',
//   initialState: campersInitialState,
//   reducers: {
//     addFavoriteCamper: (state, action) => {
//       state.favorites.push(action.payload);
//     },
//     deleteFavoriteCamper: (state, action) => {
//       state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
//     },
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchCampers.pending, state => {
//         state.loading = true;
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         console.log('fetchCampers:', action.payload);

//         state.items = [...state.items, ...action.payload];
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       }),
// });

// export const selectCampers = state => state.campers.items;
// export const selectFavoritesCampers = state => state.campers.favorites;

// export const selectFilteredContacts = createSelector(
//   [selectCampers, selectNameFilter],
//   (dataContacts, dataNameFilter) => {
//     return dataContacts.filter(contact =>
//       contact.name.toLowerCase().includes(dataNameFilter.toLowerCase())
//     );
//   }
// );

// export const selectLoading = state => state.campers.loading;
// export const selectError = state => state.campers.error;

// export const campersReducer = campersSlice.reducer;
// export const { addFavoriteCamper, deleteFavoriteCamper } = campersSlice.actions;
