import axios from 'axios';
import { routeAPI } from 'const/routeAPI/baseRoute';

export const tripAppAPI = axios.create({
  baseURL: routeAPI.BACKEND,
});

export const weatherAPI = axios.create({
  baseURL: routeAPI.WEATHER,
});
