import { ListBtnControl } from 'components/common/ListBtnControl/ListBtnControl';
import { Header } from '../HomaPage/Header/Header';
import { TripList } from '../TripList/TripList';
import { TripBoardContainer } from './TripBoard.styled';

export const TripBoard = () => {
  return (
    <TripBoardContainer>
      <Header />
      <TripList />
      <ListBtnControl />
    </TripBoardContainer>
  );
};
