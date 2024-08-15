import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66bc53f524da2de7ff6a08e0.mockapi.io';

export const fetchCampers = createAsyncThunk('campers/fetch', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/campers');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
