import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { ICities, ITrip } from 'interfaces/store/ISliceData';

export const handleFulfilledGetAllTrips = (
  state: ISliceData,
  action: PayloadAction<ITrip[]>
) => {
  state.trips = action.payload;
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledCreateTrip = (
  state: ISliceData,
  action: PayloadAction<ITrip>
) => {
  state.trips = [...state.trips, action.payload];
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledGetAllCities = (
  state: ISliceData,
  action: PayloadAction<ICities[]>
) => {
  state.cities = action.payload;
  state.isLoading = false;
  state.errorData = null;
};
