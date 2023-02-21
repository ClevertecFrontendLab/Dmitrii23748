/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable complexity */
/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { allBook, filteredBook } from '../../features/books/booksSlice';
import { getCategory } from '../../features/category/categorySlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';

import './name-nav-component.css';

export const NameNavComponent: React.FC<IBurger> = ({ burger, closeBurger, idbook, widthScreenRes }) => {
  const [color, setColor] = useState(true);
  const [hideBooks, setHideBooks] = useState(true);
  const [widthScreen, setWidth] = useState(window.innerWidth);

  const dispatch = useAppDispatch();
  const { category, loadingCategory, error } = useAppSelector((state) => state.categoryRed);
  const { booksFilter,loadingBoook, errorBook } = useAppSelector((state) => state.booksRed);

  const addColor = () => {
    setColor(true);
  };

  const removeColor = () => {
    setColor(false);
    localStorage.removeItem('flag');
  };

  const hideBooksBlock = () => {
    setHideBooks(!hideBooks);
  };

  const addHideBooksBlock = () => {
    setHideBooks(false);
  };

  const filtersBookNameCategory = (category: string) => {
    dispatch(filteredBook(category))
  }



  useEffect(() => {
    const lastNameUrl = window.location.href.split('/')[window.location.href.split('/').length - 1];

    if (lastNameUrl === 'dogovor' || lastNameUrl === 'rules') {
      setColor(false);
    }
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [burger]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);


  return (
    <aside
      className={
        burger || (widthScreenRes && widthScreenRes > 960)
          ? `aside-block__nav ${Number(idbook) >= 1 ? 'singe-burger' : ''}`
          : 'aside-block__nav aside-block__nav-open'
      }
    >
      <nav className='main-block__navigation-book'>
        <NavLink
          className={({ isActive }) =>
            isActive || color || localStorage.getItem('flag')
              ? 'navigation-title active-main-link border-active  aside-link-flex'
              : 'navigation-title__link  aside-link-flex'
          }
          to='/'
          onClick={() => {
            addColor();
            hideBooksBlock();
          }}
          data-test-id={widthScreenRes && widthScreenRes > 769 ? 'navigation-showcase' : 'burger-showcase'}
        >
          <span className='navigation-page__item-span'>Витрина книг</span>
          <button className='navigation-title__btn-arr' type='button'>
            <svg
              className={hideBooks ? 'arrow-up' : 'arrow-down'}
              width='14'
              height='8'
              viewBox='0 0 14 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z'
                fill='url(#paint0_linear_14402_30251)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_14402_30251'
                  x1='6.74785'
                  y1='-14.875'
                  x2='-23.3724'
                  y2='26.9297'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={color || localStorage.getItem('flag') ? '#F83600' : '#000'} />
                  <stop offset='1' stopColor={color || localStorage.getItem('flag') ? '#F9D423' : '#000'} />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </NavLink>
        {errorBook === 'error' || error === 'error' ? null : (
          <ul className={hideBooks ? 'navigation-book__list' : 'books-none'} data-test-id='burger-navigation'>
            <li
              className='navigation-book__item'
              data-test-id={widthScreen > 769 ? 'navigation-books' : 'burger-books'}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-main-link link-book navigation-title__link' : 'navigation-book__link link-book'
                }
                to='books/all'
                onClick={() => {
                  addColor();
                  closeBurger();
                  dispatch(allBook(booksFilter))
                }}
              >
                Все книги
              </NavLink>
            </li>
            {!loadingCategory && !loadingBoook
              ? category &&
                category.map((item) => (
                  <li
                    key={item.id}
                    className='navigation-book__item'
                    data-test-id={widthScreen > 769 ? 'navigation-books' : 'burger-books'}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'active-main-link link-book' : 'navigation-book__link link-book'
                      }
                      to={`books/${item.path}`}
                      onClick={() => {
                        addColor();
                        closeBurger();
                        filtersBookNameCategory(item.name)
                      }}
                      data-test-id='burger-books'
                    >
                      {item.name}
                    </NavLink>
                    <span className='count-book'>10</span>
                  </li>
                ))
              : null}
          </ul>
        )}
      </nav>
      <nav className='main-block__navigation-page'>
        <ul className='navigation-page__list'>
          <li
            className='navigation-page__item'
            onClick={() => {
              addHideBooksBlock();
              removeColor();
              closeBurger();
            }}
            data-test-id={widthScreen > 769 ? 'navigation-terms' : 'burger-terms'}
          >
            <NavLink
              className={({ isActive }) => (isActive ? 'active-main-link border-active' : 'navigation-title__link')}
              to='/rules'
            >
              Правила пользования
            </NavLink>
          </li>
          <li
            className='navigation-page__item'
            onClick={() => {
              addHideBooksBlock();
              removeColor();
              closeBurger();
            }}
            data-test-id={widthScreen > 769 ? 'navigation-contract' : 'burger-contract'}
          >
            <NavLink
              className={({ isActive }) => (isActive ? 'active-main-link border-active' : 'navigation-title__link')}
              to='/dogovor'
            >
              Договор оферты
            </NavLink>
          </li>
        </ul>

        <ul className='profil'>
          {widthScreenRes && widthScreenRes < 960 ? (
            <React.Fragment>
              <li className='navigation-page__item'>
                <span className='navigation-title__link'>Профиль</span>
              </li>
              <li className='navigation-page__item'>
                <span className='navigation-title__link'>Выход</span>
              </li>
            </React.Fragment>
          ) : null}
        </ul>
      </nav>
    </aside>
  );
};
