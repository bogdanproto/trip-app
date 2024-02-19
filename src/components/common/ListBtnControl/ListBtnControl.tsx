import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { Button } from '../Button/Button.styled';
import {
  selectActiveTrip,
  selectfilteredTrips,
} from 'services/redux/data/selectors';
import { MouseEvent } from 'react';
import { ITrip } from 'interfaces/store/ISliceData';
import { getWeatherByCity } from 'services/redux/data/operations/weather';
import { selectIsDataLoading } from 'services/redux/commonSelectors';
import { ListBtnBox } from './ListBtnControl.styled';

enum BtnType {
  Prev = 'prev',
  Next = 'next',
}

export const ListBtnControl = () => {
  const dispatch = useTypeDispatch();

  const isLoading = useTypeSelector(selectIsDataLoading);
  const trips = useTypeSelector(selectfilteredTrips);
  const { _id: activeId } = useTypeSelector(selectActiveTrip);

  const currentIdx = trips.findIndex((trip: ITrip) => trip._id === activeId);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const { id: btn } = evt.currentTarget;
    if (!btn) {
      return;
    }

    if (btn === BtnType.Next) {
      dispatch(getWeatherByCity(trips[currentIdx + 1]));
      return;
    }

    if (btn === BtnType.Prev) {
      dispatch(getWeatherByCity(trips[currentIdx - 1]));
      return;
    }
  };

  return (
    <ListBtnBox>
      <Button
        type="button"
        id={BtnType.Prev}
        onClick={handleClick}
        disabled={isLoading || currentIdx <= 0}
      >
        Previous
      </Button>
      <Button
        type="button"
        id={BtnType.Next}
        onClick={handleClick}
        disabled={isLoading || currentIdx >= trips?.length - 1}
      >
        Next
      </Button>
    </ListBtnBox>
  );
};
