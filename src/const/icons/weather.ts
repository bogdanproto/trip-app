import { WiDaySunny } from 'react-icons/wi';
import { WiSnow } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiFog } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
import { WiNightAltPartlyCloudy } from 'react-icons/wi';
import { WiNightClear } from 'react-icons/wi';

const arrOfTypeWeather = [
  'snow',
  'rain',
  'fog',
  'wind',
  'cloudy',
  'partly-cloudy-day',
  'partly-cloudy-night',
  'clear-day',
  'clear-night',
];

const arrOfIcons = [
  WiSnow,
  WiRain,
  WiFog,
  WiStrongWind,
  WiCloudy,
  WiDayCloudy,
  WiNightAltPartlyCloudy,
  WiDaySunny,
  WiNightClear,
];

export const weatherIcons = new Map();

arrOfTypeWeather.forEach((item, index) => {
  weatherIcons.set(item, arrOfIcons[index]);
});
