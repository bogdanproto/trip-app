import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { TripListContainer } from './TripList.styled';
import { selectTrips } from 'services/redux/data/selectors';
import { Card } from '../Card/Card';
import { ITrip } from 'interfaces/store/ISliceData';
import { AddTripBtn } from '../AddTripBtn/AddTripBtn';

export const TripList = () => {
  const trips = useTypeSelector(selectTrips);

  return (
    <TripListContainer>
      {trips.length > 0 &&
        trips.map((trip: ITrip) => <Card key={trip._id} trip={trip} />)}
      <li>
        <AddTripBtn />
      </li>
    </TripListContainer>
  );
};
