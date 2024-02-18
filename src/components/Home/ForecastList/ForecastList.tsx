import { CardForecast } from '../CardForecast/CardForecast';
import { ForecastListContainer } from './ForecastList.styled';

interface ForecastListProps {
  forecast: any;
}

export const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  return (
    <ForecastListContainer>
      {forecast.length > 0 &&
        forecast.map(
          ({ datetimeEpoch, datetime, tempmax, tempmin, icon }: any) => (
            <CardForecast
              key={datetimeEpoch}
              datetime={datetime}
              tempmax={tempmax}
              tempmin={tempmin}
              icon={icon}
            />
          )
        )}
    </ForecastListContainer>
  );
};
