import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUpUser,
  logInUser,
  logOutUser,
  refreshUser,
} from '../operations/auth';
import {
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handlePendingAuth,
  handleRejectedAuth,
} from '../handlesStatus';
import { ISliceAuthUser } from 'interfaces';
import { setAuthToken } from 'services/api';

const initialState: ISliceAuthUser = {
  user: {
    _id: null,
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  errorAuth: null,
  successMsg: null,
  isLoading: false,
  isAppLoaded: false,
};

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    toLoginUser: (state, action) => {
      const { email, name, token } = action.payload;

      setAuthToken(token);

      state.user.email = email;
      state.user.name = name;
      state.token = token;

      state.isLoading = false;
      state.isLoggedIn = true;
      state.errorAuth = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, handleFulfilledLogIn)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          logInUser.pending,
          logOutUser.pending,
          refreshUser.pending
        ),
        handlePendingAuth
      )
      .addMatcher(
        isAnyOf(
          signUpUser.rejected,
          logInUser.rejected,
          logOutUser.rejected,
          refreshUser.rejected
        ),
        handleRejectedAuth
      );
  },
});

export const userAuthReducer = authUserSlice.reducer;
export const { toLoginUser } = authUserSlice.actions;
