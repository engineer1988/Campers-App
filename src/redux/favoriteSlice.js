import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  favorites: [],
  showBtnHeart: false,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    addFavoriteCamper: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavoriteCamper: (state, action) => {
      state.favorites = state.favorites.filter(item => item._id !== action.payload._id);
    },
    toggleBtnHeart: (state, action) => {
      state.showBtnHeart = action.payload;
    },
  },
});

export const selectFavoritesCampers = state => state.favorites.favorites;
export const selectShowBtnHeart = state => state.favorites.showBtnHeart;

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavoriteCamper, deleteFavoriteCamper, toggleBtnHeart } = favoritesSlice.actions;
