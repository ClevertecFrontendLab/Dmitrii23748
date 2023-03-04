import { Link } from 'react-router-dom';

import './login-component.css';

interface ILogin {
  identifier: string;
  password: string;
  setIdentifier: (value: string) => void;
  setPassword: (value: string) => void;
}

export const LoginComponent: React.FC<ILogin> = ({ identifier, password, setIdentifier, setPassword }) => (
  <div>
    <span className='login-title'>Вход в личный кабинет</span>
    <div className='login-input'>
      <input
        className='input-elem'
        type='text'
        placeholder='логин'
        onChange={(e) => setIdentifier(e.target.value)}
        value={identifier}
      />
    </div>
    <div className='login-password'>
      <input
        className='input-elem'
        type='password'
        placeholder='пароль'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </div>
    <div className='forget-block'>
      <span className='forget-text'>Забыли логин или пароль?</span>
    </div>
    <div className='btn-block'>
      <button className='btn-text' type='submit'>
        Вход
      </button>
    </div>
    <div>
      <span className='accounting-text'>Нет учётной записи?</span>
      <span className='registration-text'>
        <Link to='/registration'>регистрация</Link>
      </span>
    </div>
  </div>
);
