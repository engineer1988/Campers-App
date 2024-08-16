import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
import { filtersReducer } from './filtersSlice';
import { favoritesReducer } from './favoriteSlice';

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
