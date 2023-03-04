/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../assets/images/avatar.png';
import burgerCross from '../../assets/images/burger-cross.svg';
import burgerLine from '../../assets/images/burger-menu.svg';
import logo from '../../assets/images/logo.svg';
import { getCategory } from '../../features/category/categorySlice';
import { useAppDispatch } from '../../hook';
import { IBurger } from '../../utils/type';

import './header-component.css';

export const HeaderComponent: React.FC<IBurger> = ({ toggleBurger, burger, addArrowOrange }) => {
  const dispatch = useAppDispatch();

  const addFlag = () => {
    localStorage.setItem('flag', 'true');
  };

  const clickAvatar = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  };

  useEffect(() => {
    dispatch(getCategory());
    localStorage.setItem('search', '');
  }, [dispatch]);

  return (
    <section className='header'>
      <div className='container'>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item header__nav-item_link'>
              <Link className='header__nav-link' to='/' onClick={addFlag}>
                <img className='header__nav-logo' src={logo} alt='logo' onClick={addArrowOrange} />
              </Link>
            </li>
            <li className='header__burger-item'>
              <button
                type='button'
                className='header__burger-img-btn'
                onClick={toggleBurger}
                data-test-id='button-burger'
              >
                <img className='burger-img' src={burger ? burgerLine : burgerCross} alt='burger' />
              </button>
            </li>
            <li className='header__nav-item header__nav-item_lib'>Библиотека</li>
          </ul>
          <ul className='header__nav-list header__nav-list_avatar'>
            <li className='header__nav-item header__nav-item_name'>Привет,{localStorage.getItem('userName')}</li>
            <Link to='/auth' className='header__nav-item' onClick={clickAvatar}>
              <img className='header__nav-avatar' src={avatar} alt='avatar' />
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};
