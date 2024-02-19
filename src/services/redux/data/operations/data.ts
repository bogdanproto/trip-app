import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITripCreate } from 'interfaces/store/ISliceData';
import {
  createTripAPI,
  getAllCityAPI,
  getAllTripsAPI,
} from 'services/api/data/dataAPI';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllTrip = createAsyncThunk(
  'data/getAllTrip',
  asyncThunkDecoratorData(async () => {
    const {
      data: { trips },
    } = await getAllTripsAPI();
    return trips;
  })
);

export const createTrip = createAsyncThunk(
  'data/createTrip',
  asyncThunkDecoratorData(async (obj: ITripCreate) => {
    const { trip } = await createTripAPI(obj);
    return trip;
  })
);

export const getAllCities = createAsyncThunk(
  'data/getAllCities',
  asyncThunkDecoratorData(async () => {
    const {
      data: { cities },
    } = await getAllCityAPI();
    return cities;
  })
);
