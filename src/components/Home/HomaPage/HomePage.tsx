import { useEffect } from 'react';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getAllCities, getAllTrip } from 'services/redux/data/operations/data';
import { TripBoard } from '../TripBoard/TripBoard';
import { SideContent } from '../SideContent/SideContent';
import { BottomContent } from '../BottomContent/BottomContent';
import { HomePageContainer, MainContent } from './HomePage.styled';
import { getWeatherByCity } from 'services/redux/data/operations/weather';

export const HomePage = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllCities(null));
    dispatch(getAllTrip(null));
    dispatch(
      getWeatherByCity({
        _id: '65cfd5a39e316f34f64927cb',
        title: 'berlin',
        startDate: '2024-02-25',
        endDate: '2024-02-27',
      })
    );
  }, [dispatch]);

  return (
    <HomePageContainer>
      <MainContent>
        <TripBoard />
        <BottomContent />
      </MainContent>
      <SideContent />
    </HomePageContainer>
  );
};
