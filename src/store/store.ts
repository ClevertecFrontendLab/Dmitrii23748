/* eslint-disable import/no-default-export */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';

import bookSingleSlice from '../features/book-single/bookSingleSlice';
import booksSlice from '../features/books/booksSlice';
import categorySlice from '../features/category/categorySlice';

const store = configureStore({
  reducer: {
    booksRed: booksSlice,
    categoryRed: categorySlice,
    bookSingleRed: bookSingleSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
