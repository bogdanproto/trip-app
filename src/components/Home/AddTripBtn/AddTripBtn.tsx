import { ModalWindow } from 'components/Modal/Modal';
import { AddTripBtnStyled } from './AddTripBtn.styled';
import { FaPlus } from 'react-icons/fa6';
import { useModal } from 'services/helpers';
import { FormAddTrip } from '../FormAddTrip/FormAddTrip';

export const AddTripBtn = () => {
  const { isOpen, close, toggle } = useModal();
  return (
    <>
      <AddTripBtnStyled onClick={toggle}>
        <FaPlus />
        Add trip
      </AddTripBtnStyled>
      <ModalWindow isOpen={isOpen} onClose={toggle}>
        <FormAddTrip onClose={close} />
      </ModalWindow>
    </>
  );
};
