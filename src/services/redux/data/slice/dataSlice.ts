import { createSlice } from '@reduxjs/toolkit';
import { handleDefaultData } from '../handlesStatus';
import { logOutUser } from 'services/redux/auth/operations/auth';
import { ISliceData } from 'interfaces';

const initialState: ISliceData = {
  trips: [],
  cities: null,
  errorData: null,
  succesMsg: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logOutUser.fulfilled, handleDefaultData);
  },
});

export const dataSliceReducer = dataSlice.reducer;
// export const {} = dataSlice.actions;
