/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { IBurger } from '../../utils/type';
import { useResize } from '../../utils/useResize';
import { NameNavComponent } from '../name-nav-comp';

import './layout-nav-component.css';

export const LayoutNavComponent: React.FC<IBurger> = ({ burger, closeBurger, toggleBurger, removeArrowOrange, colorArrowOrange }) => {
    const { widthRes } = useResize();
    const [widthScreenRes, setWidthScreenRes] = useState(widthRes);

    useEffect(() => {
        setWidthScreenRes(widthRes)
      }, [widthRes])


  return (
    <section className='layout-nav' onClick={closeBurger}>
      <div className='container'>
        <div className='aside__block'>
          <NameNavComponent
            burger={burger}
            removeArrowOrange={removeArrowOrange}
            colorArrowOrange={colorArrowOrange}
            closeBurger={closeBurger}
            widthScreenRes={widthScreenRes}
            toggleBurger={toggleBurger}
          />
          <div className='main-block__books'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};
