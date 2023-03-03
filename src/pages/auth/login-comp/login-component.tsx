import { Link } from 'react-router-dom';

interface ILogin {
  identifier: string;
  password: string;
  setIdentifier: (value: string) => void;
  setPassword: (value: string) => void;
}

export const LoginComponent: React.FC<ILogin> = ({ identifier, password, setIdentifier, setPassword }) => (
  <div>
    <h1>Авторизация</h1>
    <div>
      <input type='text' placeholder='логин' onChange={(e) => setIdentifier(e.target.value)} value={identifier} />
    </div>
    <div>
      <input type='password' placeholder='пароль' onChange={(e) => setPassword(e.target.value)} value={password} />
    </div>
    <div>
      <button type='submit'>Войти</button>
    </div>
    <span>
      <Link to='/registration'>регистрация</Link>
    </span>
  </div>
);
