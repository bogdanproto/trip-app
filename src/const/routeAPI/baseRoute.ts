interface IBaseRoute {
  BACKEND: string;
  WEATHER: string;
}

export const routeAPI: IBaseRoute = {
  BACKEND: 'https://trip-app-api-rgwn.onrender.com/',
  WEATHER:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
};
