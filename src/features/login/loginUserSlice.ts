/* eslint-disable unicorn/filename-case */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { instance } from '../../utils/axios/axios';

interface ILoginuser {
  identifier: string;
  password: string;
}

export const loginUser = createAsyncThunk('login/loginUser', async (data: ILoginuser, { rejectWithValue }) => {
  try {
    const user = await instance.post('auth/local', data);

    localStorage.setItem('token', user.data.jwt);
    localStorage.setItem('userName', user.data.user.username)

    return user.data;
  } catch (error) {
    console.log(rejectWithValue(error));

    return rejectWithValue(error);
  }
});

const initialState = {
  user: {},
  isLogin: false,
  isLoad: false,
  isError: false,
  isCategory: false,
};

const loginUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLogin = false;
        state.isLoad = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isLoad = false;
        state.isCategory = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLogin = false;
        state.isLoad = false;
        state.isError = true;
      });
  },
});

export default loginUserSlice.reducer;
