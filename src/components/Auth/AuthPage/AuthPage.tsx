import { Logo } from 'components/common';
import { AuthPageContainer } from './AuthPage.styled';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { SwitchForm } from '../SwitchForm/SwitchForm';
import { useState } from 'react';
import { FormType } from 'interfaces/form/authForm';

export const AuthPage = () => {
  const [typeForm, setTypeForm] = useState(FormType.Login);

  const handleSwitch = (type: FormType) => {
    setTypeForm(type);
  };
  return (
    <AuthPageContainer>
      <Logo />
      <SwitchForm handleSwitch={handleSwitch} typeForm={typeForm} />
      {typeForm === FormType.Login ? <LoginForm /> : <SignUpForm />}
    </AuthPageContainer>
  );
};
