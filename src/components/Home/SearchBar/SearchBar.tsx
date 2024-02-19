import { InputBoxIcon, InputForm } from 'components/common';
import { IoSearch } from 'react-icons/io5';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { selectFilterValue } from 'services/redux/data/selectors';
import { setFilter } from 'services/redux/data/slice/dataSlice';

export const SearchBar = () => {
  const dispatch = useTypeDispatch();
  const filter = useTypeSelector(selectFilterValue);

  const handleFilter = (evt: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setFilter(evt.target.value));

  return (
    <InputBoxIcon>
      <InputForm
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
        placeholder="Search your trip"
      />
      <IoSearch />
    </InputBoxIcon>
  );
};
