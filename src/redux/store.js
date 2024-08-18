import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
import { filtersReducer } from './filtersSlice';
import { favoritesReducer } from './favoriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import selectedItemReducer from './selectedItemSlice';

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: favoritesReducer,
  selectedItem: selectedItemReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
