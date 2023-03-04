/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { AnyAction,createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { instance } from '../../utils/axios/axios';

const initialState:any = {
  bookSingle: {},
  loadingBoookSingle: false,
  error: null,
};

export const getBookSingle = createAsyncThunk('bookSingle/getBookSingle', async ( id: number | string, {rejectWithValue}) => {
  const res = await instance.get(`books/${id}`);

  if (res.status !== 200) {
    return rejectWithValue(new Error('error'));
  }

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
      .addMatcher(isError, (state) => {
        state.error = 'error';
        state.loadingBoookSingle = false;
      });
  },
});

export default bookSingleSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
  }

