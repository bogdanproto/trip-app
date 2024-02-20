import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';

import { useEffect } from 'react';
import { AuthPage } from 'components/Auth';
import { selectAuthUser } from 'services/redux/auth/selectors';
import { HomePage } from 'components/Home/HomaPage/HomePage';
import { selectIsAppLoaded } from 'services/redux/commonSelectors';
import { refreshUser } from 'services/redux/auth/operations/auth';
import { Notify } from 'components/common';

export const App = () => {
  const { isLoggedIn } = useTypeSelector(selectAuthUser);
  const isAppLoaded = useTypeSelector(selectIsAppLoaded);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Notify />
      {isAppLoaded && <>{isLoggedIn ? <HomePage /> : <AuthPage />}</>}
    </>
  );
};
