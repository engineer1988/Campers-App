import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
