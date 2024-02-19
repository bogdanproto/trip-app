import { routeDataAPI } from 'const';
import { tripAppAPI } from '../axiosConf/axiosConf';
import { ITripCreate } from 'interfaces/store/ISliceData';

export const getAllTripsAPI = async (): Promise<any> => {
  const { data } = await tripAppAPI.get(routeDataAPI.TRIP);
  return data;
};

export const createTripAPI = async (obj: ITripCreate): Promise<any> => {
  const { data } = await tripAppAPI.post(routeDataAPI.TRIP, obj);
  return data;
};

export const getAllCityAPI = async (): Promise<any> => {
  const { data } = await tripAppAPI.get(routeDataAPI.CITY);
  return data;
};
