import { SearchBar } from '../SearchBar/SearchBar';
import { TripList } from '../TripList/TripList';
import { TripBoardContainer } from './TripBoard.styled';

export const TripBoard = () => {
  return (
    <TripBoardContainer>
      <SearchBar />
      <TripList />
    </TripBoardContainer>
  );
};
