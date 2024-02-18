import { useEffect } from 'react';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getAllCities, getAllTrip } from 'services/redux/data/operations/data';
import { TripBoard } from '../TripBoard/TripBoard';
import { SideContent } from '../SideContent/SideContent';
import { BottomContent } from '../BottomContent/BottomContent';
import { HomePageContainer, MainContent } from './HomePage.styled';

export const HomePage = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllCities(null));
    dispatch(getAllTrip(null));
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
