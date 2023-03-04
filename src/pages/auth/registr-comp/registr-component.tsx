import { useState } from 'react';
import { Link } from 'react-router-dom';

import './registr-component.css';

interface IRegistr {
  identifier: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  setIdentifier: (value: string) => void;
  setPassword: (value: string) => void;
  setFirsName: (value: string) => void;
  setLastName: (value: string) => void;
  setPhone: (value: string) => void;
  setEmail: (value: string) => void;
}

export const RegistrComponent: React.FC<IRegistr> = ({
  identifier,
  password,
  firstName,
  lastName,
  phone,
  email,
  setIdentifier,
  setPassword,
  setFirsName,
  setLastName,
  setPhone,
  setEmail,
}) => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <div className='reg-block'>
        <span className='login-title reg-title'>Регистрация</span>
        <span className='steps-text'>1 шаг из 3</span>
      </div>
      {step === 0 && (
        <section className='step-one'>
          <div className='login-input'>
            <input
              className='input-elem'
              type='text'
              placeholder='Придумайте логин для входа'
              onChange={(e) => setIdentifier(e.target.value)}
              value={identifier}
            />
          </div>
          <div className='login-registr'>
            <input
              className='input-elem'
              type='password'
              placeholder='пароль'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </section>
      )}

      {step === 1 && (
        <section className='step-two'>
          <div className='login-input'>
            <input
              className='input-elem'
              type='text'
              placeholder='имя'
              onChange={(e) => setFirsName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className='login-registr'>
            <input
              className='input-elem'
              type='text'
              placeholder='фамилия'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </section>
      )}

      {step === 2 && (
        <section className='step-three'>
          <div className='login-input'>
            <input
              className='input-elem'
              type='tel'
              placeholder='номер телефона'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className='login-registr'>
            <input
              className='input-elem'
              type='email'
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </section>
      )}

      <div className='btn-block'>
        <button className='btn-text' type='submit'>
          Cледующий шаг
        </button>
      </div>

      <div>
        <span className='accounting-text'>Есть учётная запись?</span>
        <span className='registration-text'>
          <Link to='/auth'>войти</Link>
        </span>
      </div>
    </div>
  );
};
