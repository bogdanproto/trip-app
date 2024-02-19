import { Logo } from 'components/common';
import { AuthPageContainer } from './AuthPage.styled';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { SwitchForm } from '../SwitchForm/SwitchForm';
import { useEffect, useState } from 'react';
import { FormType } from 'interfaces/form/authForm';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { toLoginUser } from 'services/redux/auth/slice/authSlice';
import { clearUrlParams } from 'services/helpers';

export const AuthPage = () => {
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
      <a href="https://trip-app-api-rgwn.onrender.com/auth/google">Google!</a>
    </AuthPageContainer>
  );
};
