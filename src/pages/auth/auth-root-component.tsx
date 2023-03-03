/* eslint-disable no-return-assign */
/* eslint-disable no-constant-condition */
import { useLocation } from 'react-router-dom';

import { LoginComponent } from './login-comp';
import { RegistrComponent } from './registr-comp';

export const AuthRootComponent = () => {
  const location = useLocation();

  return location.pathname === '/auth' ? (
    <LoginComponent />
  ) : location.pathname === '/registration' ? (
    <RegistrComponent />
  ) : null;
};
