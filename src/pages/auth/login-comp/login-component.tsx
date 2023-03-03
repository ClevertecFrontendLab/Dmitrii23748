import { Link } from 'react-router-dom';

export const LoginComponent = () => (
  <div>
    <h1>Авторизация</h1>

    <span>
      <Link to='/registration'>регистрация</Link>
    </span>
  </div>
);
