import { routeAuthAPI } from 'const/routeAPI/auth';
import { tripAppAPI } from '../axiosConf/axiosConf';
import { IUserLogInSuccess } from 'interfaces';

export const signUpAPI = async (objSignUp: IUserLogInSuccess): Promise<any> => {
  const { data } = await tripAppAPI.post(routeAuthAPI.SIGNUP, objSignUp);

  return data;
};

export const logInAPI = async (objSignUp: IUserLogInSuccess): Promise<any> => {
  const { data } = await tripAppAPI.post(routeAuthAPI.LOGIN, objSignUp);

  return data;
};

export const logOutAPI = async (): Promise<any> => {
  await tripAppAPI.post(routeAuthAPI.LOGOUT);
};

export const refreshUserAPI = async (): Promise<any> => {
  const { data } = await tripAppAPI.get(routeAuthAPI.CURRENT);
  return data;
};

export const setAuthToken = (token: string): void => {
  tripAppAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = (): void => {
  tripAppAPI.defaults.headers.common.Authorization = null;
};
