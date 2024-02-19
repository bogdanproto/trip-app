import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWeatherByDate } from 'interfaces';
import { getWeatherByDateAPI, getWeatherTodayAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getWeatherByCity = createAsyncThunk(
  'data/getWeatherByCity',
  asyncThunkDecoratorData(async (obj: IWeatherByDate) => {
    const {
      data: { days: weatherToday },
    } = await getWeatherTodayAPI(obj);
    const {
      data: { days: weatherByDay },
    } = await getWeatherByDateAPI(obj);

    return { _id: obj._id, weatherByDay, weatherToday };
  })
);
