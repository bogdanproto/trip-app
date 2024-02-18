import { createSelector } from '@reduxjs/toolkit';
import { ITrip } from 'interfaces/store/ISliceData';
import { RootState } from 'services/redux/store';

export const selectCities = (state: RootState) => state.data.cities;

export const selectTrips = (state: RootState) => state.data.trips;

export const selectActiveTrip = (state: RootState) => state.data.activeTrip;

export const selectActiveTripData = createSelector(
  [selectActiveTrip, selectTrips],
  (activeTrip, arrTrips) => {
    const trip = arrTrips.find((item: ITrip) => item._id === activeTrip._id);

    return {
      weatherToday: activeTrip?.weatherToday[0],
      trip,
    };
  }
);

export const selectDailyForecast = (state: RootState) =>
  state.data.activeTrip.weatherByDay;
