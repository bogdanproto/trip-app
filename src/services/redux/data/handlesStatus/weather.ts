import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { ITripActive } from 'interfaces/store/ISliceData';

export const handleFulfilledGetWeather = (
  state: ISliceData,
  action: PayloadAction<ITripActive>
) => {
  state.activeTrip = { ...action.payload };
  state.isLoading = false;
  state.errorData = null;
};
