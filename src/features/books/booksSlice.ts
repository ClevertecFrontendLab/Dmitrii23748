/* eslint-disable unicorn/filename-case */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IBoooks, IBoooksingle } from '../../utils/type';

const initialState: IBoooks = {
  books: [],
  booksFilter: [],
  loadingBoook: false,
  errorBook: null,
  sort: 'down',
};

export const getBooks = createAsyncThunk<IBoooksingle[]>('books/getBooks', async (_, { rejectWithValue }) => {
  const res = await axios.get('https://strapi.cleverland.by/api/books');

  if (res.status !== 200) {
    return rejectWithValue(new Error('error'));
  }

  return res.data.sort((itemA: { rating: number }, itemB: { rating: number }) =>
    itemA.rating < itemB.rating ? 1 : -1
  );
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filteredBook: (state, action) => {
      state.books = state.booksFilter.filter((book) => book.categories[0].includes(action.payload));
    },
    filteredBookSearch: (state, action) => {
        if(action.payload !== null) {
            state.books = state.booksFilter.filter((book) => book.title.toLowerCase().includes(action.payload.toLowerCase()));
        }

    },
    sortedUp: (state) => {
      state.books = state.books.sort((itemA: { rating: number }, itemB: { rating: number }) =>
        itemA.rating > itemB.rating ? 1 : -1
      );
      state.sort = 'up';
    },
    sortedDown: (state) => {
      state.books = state.books.sort((itemA: { rating: number }, itemB: { rating: number }) =>
        itemA.rating < itemB.rating ? 1 : -1
      );
      state.sort = 'down';
    },
    allBook: (state, action) => {
      state.books = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loadingBoook = true;
        state.errorBook = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loadingBoook = false;
        state.booksFilter = action.payload;
      })
      .addMatcher(isError, (state) => {
        state.errorBook = 'error';
        state.loadingBoook = false;
      });
  },
});

export const { filteredBook, filteredBookSearch, sortedUp, sortedDown, allBook } = booksSlice.actions;
export default booksSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
