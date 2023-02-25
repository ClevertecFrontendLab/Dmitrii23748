/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable complexity */
/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import {
  allBook,
  filteredBook,
  filteredBookSearch,
  getBooks,
  sortedDown,
  sortedUp,
} from '../../features/books/booksSlice';
import { getCategory } from '../../features/category/categorySlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';

import './name-nav-component.css';

export const NameNavComponent: React.FC<IBurger> = ({ burger, closeBurger, idbook, widthScreenRes }) => {
  const dispatch = useAppDispatch();
  const { category, loadingCategory, error } = useAppSelector((state) => state.categoryRed);
  const { booksFilter, loadingBoook, errorBook, sort, books } = useAppSelector((state) => state.booksRed);

  const [color, setColor] = useState(true);
  const [hideBooks, setHideBooks] = useState(true);
  const [widthScreen, setWidth] = useState(window.innerWidth);
  const [countCategory, setCountCategory] = useState([...category]);

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
    dispatch(filteredBook(category));
    dispatch(filteredBookSearch(localStorage.getItem('search')));
  };
  const sortedBooks = () => {
    if (sort === 'up') {
      dispatch(sortedUp());
    } else if (sort === 'down') {
      dispatch(sortedDown());
    }
  };
  const countArrCategory = (name: string) => {
    let count = 0;

    for (let i = 0; i < booksFilter.length; i += 1) {
      if (booksFilter[i].categories[0] === name) {
        count += 1;
      }
    }

    return count;
  };

  const clickDogovorRules = () => {
    addHideBooksBlock();
    removeColor();
    closeBurger();
  };

  const clickAllCategory = () => {
    addColor();
    closeBurger();
    dispatch(allBook(booksFilter));
    dispatch(filteredBookSearch(localStorage.getItem('search')));
    sortedBooks();
  };

  const clickCategory = (name: string) => {
    addColor();
    closeBurger();
    filtersBookNameCategory(name);
    localStorage.setItem('searchFlag', 'false');
    sortedBooks();
  };

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
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    const copyCategory = [...category];

    const arr = copyCategory.map((obj) => ({ ...obj, count: `${countArrCategory(obj.name)}` }));

    setCountCategory(arr);
  }, [books]);

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
          to='books/all'
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
                onClick={clickAllCategory}
              >
                Все книги
              </NavLink>
            </li>
            {!loadingCategory && !loadingBoook
              ? countCategory &&
                countCategory.map((item) => (
                  <li key={item.id} className='navigation-book__item'>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'active-main-link link-book' : 'navigation-book__link link-book'
                      }
                      to={`books/${item.path}`}
                      onClick={() => clickCategory(item.name)}
                      data-test-id={
                        widthScreenRes && widthScreenRes > 769 ? `navigation-${item.path}` : `burger-${item.path}`
                      }
                    >
                      {item.name}
                    </NavLink>
                    <span
                      className='count-book'
                      data-test-id={
                        widthScreenRes && widthScreenRes > 769
                          ? `navigation-book-count-for-${item.path}`
                          : `burger-book-count-for-${item.path}`
                      }
                    >
                      {item.count}
                    </span>
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
            onClick={clickDogovorRules}
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
            onClick={clickDogovorRules}
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
