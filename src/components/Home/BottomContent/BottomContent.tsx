import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { ForecastList } from '../ForecastList/ForecastList';
import { BottomContentContainer } from './BottomContent.styled';
import { selectDailyForecast } from 'services/redux/data/selectors';

export const BottomContent = () => {
  const forecast = useTypeSelector(selectDailyForecast);
  return (
    <BottomContentContainer>
      <h3>Daily forecast</h3>
      {forecast.length > 0 ? (
        <ForecastList forecast={forecast} />
      ) : (
        <h4>Select your trip for forecast</h4>
      )}
    </BottomContentContainer>
  );
};
