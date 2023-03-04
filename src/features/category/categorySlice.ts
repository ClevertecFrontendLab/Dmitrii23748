/* eslint-disable unicorn/filename-case */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { instance } from '../../utils/axios/axios';
import { ICategory, ICategorys } from '../../utils/type';

const initialState: ICategorys = {
  category: [],
  loadingCategory: false,
  error: null,
};

export const getCategory = createAsyncThunk<ICategory[]>('category/getCategory', async (_, { rejectWithValue }) => {
  const res = await instance.get('categories');

  if (res.status !== 200) {
    return rejectWithValue(new Error('error'));
  }

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
      .addMatcher(isError, (state) => {
        state.error = 'error';
        state.loadingCategory = false;
      });
  },
});
export default categorySlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
