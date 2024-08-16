import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  favorites: [],
};

// Синхронные действия
// export const addFavoriteCamper = createAction('campers/addFavorite');
// export const deleteFavoriteCamper = createAction('campers/deleteFavorite');

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    // Синхронные редьюсеры
    addFavoriteCamper: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavoriteCamper: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
});

export const selectFavoritesCampers = state => state.favorites.favorites;

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavoriteCamper, deleteFavoriteCamper } = favoritesSlice.actions;
