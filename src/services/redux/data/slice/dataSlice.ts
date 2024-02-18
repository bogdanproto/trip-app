import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleDefaultData,
  handleFulfilledCreateTrip,
  handleFulfilledGetAllCities,
  handleFulfilledGetAllTrips,
  handleFulfilledGetWeather,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';
import { logOutUser } from 'services/redux/auth/operations/auth';
import { ISliceData } from 'interfaces';
import { createTrip, getAllCities, getAllTrip } from '../operations/data';
import { getWeatherByCity } from '../operations/weather';

const initialState: ISliceData = {
  trips: [],
  activeTrip: {
    _id: null,
    weatherToday: [],
    weatherByDay: [],
  },
  cities: [],
  errorData: null,
  succesMsg: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logOutUser.fulfilled, handleDefaultData)
      .addCase(getAllTrip.fulfilled, handleFulfilledGetAllTrips)
      .addCase(getAllCities.fulfilled, handleFulfilledGetAllCities)
      .addCase(createTrip.fulfilled, handleFulfilledCreateTrip)
      .addCase(getWeatherByCity.fulfilled, handleFulfilledGetWeather)
      .addMatcher(
        isAnyOf(
          getAllTrip.pending,
          getAllCities.pending,
          createTrip.pending,
          getWeatherByCity.pending
        ),
        handlePendingData
      )
      .addMatcher(
        isAnyOf(
          getAllTrip.rejected,
          getAllCities.rejected,
          createTrip.rejected,
          getWeatherByCity.rejected
        ),
        handleRejectedData
      );
  },
});

export const dataSliceReducer = dataSlice.reducer;
// export const {} = dataSlice.actions;
