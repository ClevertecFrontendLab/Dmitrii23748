/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState:any = {
  bookSingle: {},
  loadingBoookSingle: false,
  error: null,
};

export const getBookSingle = createAsyncThunk('bookSingle/getBookSingle', async (id: number | string) => {
  const res = await axios.get(`https://strapi.cleverland.by/api/books/${id}`);

  return res.data;
});

export const bookSingleSlice = createSlice({
  name: 'bookSingle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookSingle.pending, (state) => {
        state.loadingBoookSingle = true;
        state.error = null;
      })
      .addCase(getBookSingle.fulfilled, (state, action) => {
        state.bookSingle = {...state.bookSingle, ...action.payload};
        state.loadingBoookSingle = false;
      })
      .addCase(getBookSingle.rejected, (state, action) => {
        console.log('rejected', state);
      });
  },
});

export default bookSingleSlice.reducer;
