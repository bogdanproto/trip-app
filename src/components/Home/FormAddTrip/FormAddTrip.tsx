import { Button, Select } from 'components/common';
import {
  ButtonFormBox,
  FormActionElement,
  FormAddTripContainer,
} from './FormAddTrip.styled';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectCities } from 'services/redux/data/selectors';
import { ChangeEvent, useState } from 'react';

const initialFields = {
  city: '',
  startDate: '',
  endDate: '',
};

export const FormAddTrip = () => {
  const options = useTypeSelector(selectCities);
  const [fields, setFields] = useState(initialFields);

  console.log(fields);

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = evt.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <FormAddTripContainer>
      <h4>Create trip</h4>

      <FormActionElement>
        <Select
          label={'city'}
          id={'city'}
          placeholder={'Please select a city'}
          value={fields.city}
          options={options}
          onChange={handleChange}
        />
        <label htmlFor="datePicker"></label>
        <input type="date" id="datePicker" />
        <ButtonFormBox>
          <Button type={'button'}>Cancel</Button>
          <Button type={'submit'}>Save</Button>
        </ButtonFormBox>
      </FormActionElement>
    </FormAddTripContainer>
  );
};
