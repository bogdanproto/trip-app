import { SearchBarContainer } from './SearchBar.styled';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { logOutUser } from 'services/redux/auth/operations';

export const SearchBar = () => {
  const dispatch = useTypeDispatch();
  const handleClick = () => {
    dispatch(logOutUser(null));
  };
  return (
    <SearchBarContainer>
      <button onClick={handleClick}>Log out</button>
      <input />
    </SearchBarContainer>
  );
};
