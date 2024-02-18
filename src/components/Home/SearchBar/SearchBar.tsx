import { ActionContainer, SearchBarContainer } from './SearchBar.styled';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { logOutUser } from 'services/redux/auth/operations';
import { Button, InputBoxIcon, InputForm } from 'components/common';
import { IoSearch } from 'react-icons/io5';

export const SearchBar = () => {
  const dispatch = useTypeDispatch();
  const handleClick = () => {
    dispatch(logOutUser(null));
  };
  return (
    <SearchBarContainer>
      <h1>
        Weather <span>forecast</span>
      </h1>

      <ActionContainer>
        <InputBoxIcon>
          <InputForm placeholder="Search your trip" />
          <IoSearch />
        </InputBoxIcon>

        <Button onClick={handleClick}>Logout</Button>
      </ActionContainer>
    </SearchBarContainer>
  );
};
