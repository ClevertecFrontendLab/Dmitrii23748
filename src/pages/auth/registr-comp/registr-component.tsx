import { Link } from 'react-router-dom';

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
}) => (
  <div>
    <h1>Регистрация</h1>
    <div>
      <input type='text' placeholder='логин' onChange={(e) => setIdentifier(e.target.value)} value={identifier} />
    </div>
    <div>
      <input type='password' placeholder='пароль' onChange={(e) => setPassword(e.target.value)} value={password} />
    </div>
    <div>
      <input type='text' placeholder='имя' onChange={(e) => setFirsName(e.target.value)} value={firstName} />
    </div>
    <div>
      <input type='text' placeholder='фамилия' onChange={(e) => setLastName(e.target.value)} value={lastName} />
    </div>
    <div>
      <input type='tel' placeholder='номер телефона' onChange={(e) => setPhone(e.target.value)} value={phone} />
    </div>
    <div>
      <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
    </div>
    <div>
      <button type='submit'>Зарегистрироваться</button>
    </div>
    <span>
      <Link to='/auth'>авторизация</Link>
    </span>
  </div>
);
