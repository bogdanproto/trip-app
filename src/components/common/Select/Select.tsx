import { ICities } from 'interfaces/store/ISliceData';
import { ChangeEvent } from 'react';

interface SelectProps {
  label: string;
  placeholder: string;
  id: string;
  options: ICities[];
  value: string;
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  id,
  options,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map(({ _id, title }) => (
          <option value={_id}>{title.toUpperCase()}</option>
        ))}
      </select>
    </>
  );
};
