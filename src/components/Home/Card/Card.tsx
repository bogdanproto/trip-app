import { ITrip } from 'interfaces/store/ISliceData';
import { CardContainer } from './Card.styled';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { getWeatherByCity } from 'services/redux/data/operations/weather';

interface CardProps {
  trip: ITrip;
}

export const Card: React.FC<CardProps> = ({ trip }) => {
  const dispatch = useTypeDispatch();

  const handleClick = () => {
    dispatch(getWeatherByCity({ ...trip, title: trip.item.title }));
  };

  return (
    <li>
      <CardContainer onClick={handleClick}>
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
