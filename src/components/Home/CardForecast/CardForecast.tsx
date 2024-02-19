import dayjs from 'dayjs';
import { weatherIcons } from 'const';
import { CardForecastContainer } from './CardForecast.styled';

interface CardForecastProps {
  datetime: string;
  tempmax: number;
  tempmin: number;
  icon: string;
}

export const CardForecast: React.FC<CardForecastProps> = ({
  datetime,
  tempmax,
  tempmin,
  icon,
}) => {
  return (
    <li>
      <CardForecastContainer>
        <p>{dayjs(datetime).format('DD MMMM')}</p>
        {weatherIcons.get(icon)()}
        <span>{`${tempmax}° / ${tempmin}°`}</span>
      </CardForecastContainer>
    </li>
  );
};
