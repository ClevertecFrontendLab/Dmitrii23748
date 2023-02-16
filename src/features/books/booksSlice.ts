/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IBoooks, IBoooksingle } from '../../utils/type';

const initialState: IBoooks = {
  books: [],
  loadingBoook: false,
  errorBook: null,
};

export const getBooks = createAsyncThunk<IBoooksingle[]>('books/getBooks', async (_, { rejectWithValue }) => {
  const res = await axios.get('https://strapi.cleverland.by/api/books');

  if (res.status !== 200) {
    return rejectWithValue(new Error('error'));
  }

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
        state.errorBook = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loadingBoook = false;
      })
      .addMatcher(isError, (state) => {
        state.errorBook = 'error';
        state.loadingBoook = false;
      });
  },
});

export default booksSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
