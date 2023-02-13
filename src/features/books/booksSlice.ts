/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IBoooks, IBoooksingle } from '../../utils/type';

const initialState: IBoooks = {
  books: [],
  loadingBoook: false,
  error: null,
};

export const getBooks = createAsyncThunk<IBoooksingle[]>('books/getBooks', async () => {
  const res = await axios.get('https://strapi.cleverland.by/api/books');

  return res.data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loadingBoook = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loadingBoook = false;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log('rejected', state);
      });
  },
});

export default booksSlice.reducer;
