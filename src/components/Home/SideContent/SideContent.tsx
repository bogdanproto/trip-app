import dayjs from 'dayjs';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { ForecastTodayBox, SideContentContainer } from './SideContent.styled';
import { selectActiveTripData } from 'services/redux/data/selectors';
import { weatherIcons } from 'const';
import { Timer } from '../HomaPage/Timer/Timer';

export const SideContent = () => {
  const { trip, weatherToday } = useTypeSelector(selectActiveTripData);
  return (
    <SideContentContainer>
      {trip ? (
        <>
          <ForecastTodayBox>
            <h2>{dayjs(weatherToday?.datetime).format('DD MMMM')}</h2>
            <div>
              {weatherToday?.icon && weatherIcons.get(weatherToday?.icon)()}
              <p>{`${weatherToday?.temp}°`}</p>
            </div>
            <h3>{trip?.item.title.toUpperCase()}</h3>
          </ForecastTodayBox>
          <Timer
            restTime={(dayjs(trip?.startDate).unix() - dayjs().unix()) * 1000}
          />
        </>
      ) : (
        <p>Select your trip for forecast</p>
      )}
    </SideContentContainer>
  );
};
