import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { TripListContainer } from './TripList.styled';
import { selectfilteredTrips } from 'services/redux/data/selectors';
import { Card } from '../Card/Card';
import { ITrip } from 'interfaces/store/ISliceData';
import { AddTripBtn } from '../AddTripBtn/AddTripBtn';

export const TripList = () => {
  const filteredTrips = useTypeSelector(selectfilteredTrips);

  return (
    <TripListContainer>
      {filteredTrips.length > 0 &&
        filteredTrips.map((trip: ITrip) => <Card key={trip._id} trip={trip} />)}
      <li>
        <AddTripBtn />
      </li>
    </TripListContainer>
  );
};
