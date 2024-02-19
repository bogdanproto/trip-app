import { ActionContainer, HeaderContainer } from './Header.styled';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { logOutUser } from 'services/redux/auth/operations';
import { Button } from 'components/common';
import { SearchBar } from 'components/Home/SearchBar/SearchBar';

export const Header = () => {
  const dispatch = useTypeDispatch();
  const handleClick = () => {
    dispatch(logOutUser(null));
  };
  return (
    <HeaderContainer>
      <h1>
        Weather <span>forecast</span>
      </h1>

      <ActionContainer>
        <SearchBar />

        <Button onClick={handleClick}>Logout</Button>
      </ActionContainer>
    </HeaderContainer>
  );
};
