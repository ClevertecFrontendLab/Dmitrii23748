/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICategory, ICategorys } from '../../utils/type';



const initialState:ICategorys = {
  category: [],
  loadingCategory: false,
  error: null,
};

export const getCategory = createAsyncThunk<ICategory[]>('category/getCategory', async () => {
  const res = await axios.get('https://strapi.cleverland.by/api/categories');

  return res.data;
});

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loadingCategory = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loadingCategory = false;
      })
      .addCase(getCategory.rejected, (state, action) => {
        console.log('rejected', state);
      });
  },
});

export default categorySlice.reducer;
