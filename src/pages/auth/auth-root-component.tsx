/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-return-assign */
/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadComponent } from '../../components/load-comp';
import { loginUser } from '../../features/login/loginUserSlice';
import { useAppDispatch, useAppSelector } from '../../hook';

import { LoginComponent } from './login-comp';
import { RegistrComponent } from './registr-comp';

export const AuthRootComponent = () => {
  const dispatch = useAppDispatch();
  const { isLoad } = useAppSelector((state) => state.loginUser);
  const location = useLocation();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/auth') {
      const auth = {
        identifier,
        password,
      };

      await dispatch(loginUser(auth));
      navigate('/');
    } else if (location.pathname === '/registration') {
      const registr = {
        identifier,
        password,
        firstName,
        lastName,
        phone,
        email,
      };

      console.log(registr);
    }
    setIdentifier('');
    setPassword('');
    setFirsName('');
    setLastName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      {isLoad ? <LoadComponent /> : null}
      <form onSubmit={handleSubmit}>
        {location.pathname === '/auth' ? (
          <LoginComponent
            setIdentifier={setIdentifier}
            setPassword={setPassword}
            identifier={identifier}
            password={password}
          />
        ) : location.pathname === '/registration' ? (
          <RegistrComponent
            identifier={identifier}
            password={password}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            email={email}
            setIdentifier={setIdentifier}
            setPassword={setPassword}
            setFirsName={setFirsName}
            setLastName={setLastName}
            setPhone={setPhone}
            setEmail={setEmail}
          />
        ) : null}
      </form>
    </div>
  );
};
