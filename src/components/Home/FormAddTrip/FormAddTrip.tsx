import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { Button, ErrorInputForm, Input, Select } from 'components/common';
import {
  ButtonFormBox,
  FieldContainer,
  FormActionElement,
  FormAddTripContainer,
} from './FormAddTrip.styled';
import { selectCities } from 'services/redux/data/selectors';
import { ChangeEvent, FormEvent, useState } from 'react';
import { handleFieldsErr, validateDateForm } from 'services/helpers';
import { createTrip } from 'services/redux/data/operations/data';
import { ITripCreate } from 'interfaces/store/ISliceData';

interface FormAddTripProps {
  onClose: () => void;
}

const initialFields = {
  item: '',
  startDate: '',
  endDate: '',
};

export const FormAddTrip: React.FC<FormAddTripProps> = ({ onClose }) => {
  const options = useTypeSelector(selectCities);

  const [fields, setFields] = useState<ITripCreate>(initialFields);
  const [fieldsErr, setFieldsErr] = useState<ITripCreate>(initialFields);

  const dispatch = useTypeDispatch();

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = evt.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault();

    const isError = handleFieldsErr(fields, setFieldsErr);
    if (isError) {
      return;
    }
    dispatch(createTrip(fields));
    onClose();
  };

  return (
    <FormAddTripContainer>
      <h4>Create trip</h4>

      <FormActionElement onSubmit={handleSubmit}>
        <FieldContainer>
          <Select
            label="City"
            id="item"
            placeholder="Please select a city"
            value={fields.item}
            options={options}
            onChange={handleChange}
          />
          <ErrorInputForm>
            {fieldsErr.item.length > 0 && fieldsErr.item}
          </ErrorInputForm>
        </FieldContainer>

        <FieldContainer>
          <Input
            label="Start date"
            id="startDate"
            type="date"
            placeholder="Start date"
            min={validateDateForm().minDate}
            max={validateDateForm().maxDate}
            value={fields.startDate}
            onChange={handleChange}
          />
          <ErrorInputForm>
            {fieldsErr.startDate.length > 0 && fieldsErr.startDate}
          </ErrorInputForm>
        </FieldContainer>

        <FieldContainer>
          <Input
            label="End date"
            id="endDate"
            type="date"
            placeholder="End date"
            min={validateDateForm().minDate}
            max={validateDateForm().maxDate}
            value={fields.endDate}
            onChange={handleChange}
          />
          <ErrorInputForm>
            {fieldsErr.endDate.length > 0 && fieldsErr.endDate}
          </ErrorInputForm>
        </FieldContainer>

        <ButtonFormBox>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit">Save</Button>
        </ButtonFormBox>
      </FormActionElement>
    </FormAddTripContainer>
  );
};
