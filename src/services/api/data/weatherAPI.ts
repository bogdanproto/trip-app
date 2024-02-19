import { IWeatherByDate, IWeatherToday } from 'interfaces';
import { weatherAPI } from '../axiosConf/axiosConf';

export const getWeatherTodayAPI = async ({
  title,
}: IWeatherToday): Promise<any> => {
  const { REACT_APP_KEY } = process.env;
  const params = {
    unitGroup: 'metric',
    include: 'days',
    key: REACT_APP_KEY,
    contentType: 'json',
  };

  const data = await weatherAPI.get(`/${title}/today`, {
    params,
  });

  return data;
};

export const getWeatherByDateAPI = async ({
  title,
  startDate,
  endDate,
}: IWeatherByDate): Promise<any> => {
  const { REACT_APP_KEY } = process.env;
  const params = {
    unitGroup: 'metric',
    include: 'days',
    key: REACT_APP_KEY,
    contentType: 'json',
  };
  const data = await weatherAPI.get(`/${title}/${startDate}/${endDate}`, {
    params,
  });
  return data;
};
