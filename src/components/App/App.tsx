import { refreshUser } from 'services/redux/auth/operations/auth';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';

import { useEffect } from 'react';
import { AuthPage } from 'components/Auth';
import { selectAuthUser } from 'services/redux/auth/selectors';
import { HomePage } from 'components/Home/HomaPage/HomePage';
import { selectIsAppLoaded } from 'services/redux/commonSelectors';

export const App = () => {
  const { isLoggedIn } = useTypeSelector(selectAuthUser);
  const isAppLoaded = useTypeSelector(selectIsAppLoaded);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{isAppLoaded && <>{isLoggedIn ? <HomePage /> : <AuthPage />}</>}</>;
};
