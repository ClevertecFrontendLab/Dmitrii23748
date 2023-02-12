import { Outlet } from 'react-router-dom';

import { IBurger } from '../../utils/type';
import { FooterComponent } from '../footer-comp';
import { HeaderComponent } from '../header-comp';

import './layout-component.css';

export const Layout: React.FC<IBurger> = ({ toggleBurger, closeBurger, burger, addArrowOrange, removeArrowOrange }) => (
  <div className='layout'>
    <HeaderComponent
      toggleBurger={toggleBurger}
      burger={burger}
      addArrowOrange={addArrowOrange}
      closeBurger={closeBurger}
      removeArrowOrange={removeArrowOrange}
    />
    <Outlet />
    <FooterComponent toggleBurger={toggleBurger} closeBurger={closeBurger} />
  </div>
);
