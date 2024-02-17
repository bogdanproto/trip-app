import { logOutUser } from 'services/redux/auth/operations';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';

export const HomePage = () => {
  const dispatch = useTypeDispatch();

  const handleClick = () => {
    dispatch(logOutUser(null));
  };

  return (
    <>
      <h1>HomePage</h1>;<button onClick={handleClick}>Log out</button>
    </>
  );
};
