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

export const selectFilterValue = (state: RootState) => state.data.filter;

export const selectfilteredTrips = createSelector(
  [selectTrips, selectFilterValue],
  (arrTrips, filter) =>
    arrTrips
      .filter((trip: ITrip) => trip.item.title.includes(filter.toLowerCase()))
      .sort(
        (tripA: ITrip, tripB: ITrip) =>
          new Date(tripA.startDate).getTime() -
          new Date(tripB.startDate).getTime()
      )
);
