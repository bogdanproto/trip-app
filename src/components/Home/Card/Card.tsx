import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getWeatherByCity } from 'services/redux/data/operations/weather';
import { selectActiveTrip } from 'services/redux/data/selectors';
import { ITrip } from 'interfaces/store/ISliceData';
import { CardContainer } from './Card.styled';

interface CardProps {
  trip: ITrip;
}

export const Card: React.FC<CardProps> = ({ trip }) => {
  const dispatch = useTypeDispatch();
  const { _id } = useTypeSelector(selectActiveTrip);

  const handleClick = () => {
    dispatch(getWeatherByCity({ ...trip, title: trip.item.title }));
  };

  return (
    <li>
      <CardContainer onClick={handleClick} $isActive={trip._id === _id}>
        <img src={trip.item.imgCloud} alt="Card" />
        <div>
          <h4>{trip.item.title.toUpperCase()}</h4>
          <p>{`${trip.startDate.replaceAll(
            '-',
            '.'
          )} - ${trip.endDate.replaceAll('-', '.')}`}</p>
        </div>
      </CardContainer>
    </li>
  );
};
