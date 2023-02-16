/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';

import { getBookSingle } from '../../features/book-single/bookSingleSlice';
import {useAppDispatch, useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';
import { BookColumnComponent } from '../book-column-comp';
import { BookRowComponent } from '../book-row-comp';
import { ErrorComponent } from '../error-comp';
import { LoadComponent } from '../load-comp';

import './books-component.css';

export const BooksComponent: React.FC<IBurger> = ({ bgColor, closeBurger }) => {
    const dispatch = useAppDispatch();
  const { books, loadingBoook, errorBook } = useAppSelector((state) => state.booksRed);
  const { loadingCategory, error } = useAppSelector((state) => state.categoryRed);




  return (
    <React.Fragment>
      {errorBook === 'error' || error === 'error' ? <ErrorComponent/> : null}

      <ul className={bgColor ? 'books' : 'books-flex'} onClick={closeBurger}>
        {!loadingBoook && !loadingCategory ? (
          books.map((item) => (
            <li className={bgColor ? 'book-row__comp' : 'book'} key={item.id}>
              <Link className='single-book' to={`${item.id}`} onClick={() => dispatch(getBookSingle(item.id))}>
                {bgColor ? <BookRowComponent {...item} /> : <BookColumnComponent {...item} />}
              </Link>
            </li>
          ))
        ) : (
          <LoadComponent />
        )}
      </ul>
    </React.Fragment>
  );
};
