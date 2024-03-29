import { useEffect, useState } from 'react';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { GoogleLink, Logo } from 'components/common';
import { AuthPageContainer } from './AuthPage.styled';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { SwitchForm } from '../SwitchForm/SwitchForm';
import { FormType } from 'interfaces/form/authForm';
import { toLoginUser } from 'services/redux/auth/slice/authSlice';
import { clearUrlParams } from 'services/helpers';
import { routeAuthAPI } from 'const';

export const AuthPage = () => {
  const { REACT_APP_BACKEND } = process.env;
  const [typeForm, setTypeForm] = useState(FormType.Login);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const { token, email, name } = Object.fromEntries(params);

    if (token) {
      dispatch(toLoginUser({ token, email, name }));
      clearUrlParams(params);
    }
  }, [dispatch]);

  const handleSwitch = (type: FormType) => {
    setTypeForm(type);
  };

  return (
    <AuthPageContainer>
      <Logo />
      <SwitchForm handleSwitch={handleSwitch} typeForm={typeForm} />
      {typeForm === FormType.Login ? <LoginForm /> : <SignUpForm />}
      <GoogleLink link={`${REACT_APP_BACKEND}${routeAuthAPI.GOOGLE}`} />
    </AuthPageContainer>
  );
};
