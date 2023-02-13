/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';
import { BookColumnComponent } from '../book-column-comp';
import { BookRowComponent } from '../book-row-comp';

import './books-component.css';

export const BooksComponent: React.FC<IBurger> = ({ bgColor, closeBurger }) => {
  const { books, loadingBoook } = useAppSelector((state) => state.booksRed);
  const { loadingCategory } = useAppSelector((state) => state.categoryRed);

  return (
    <ul className={bgColor ? 'books' : 'books-flex'} onClick={closeBurger}>
      {!loadingBoook && !loadingCategory ? (
        books.map((item) => (
          <li className={bgColor ? 'book-row__comp' : 'book'} key={item.id}>
            <Link className='single-book' to={`${item.id}`}>
              {bgColor ? <BookRowComponent {...item} /> : <BookColumnComponent {...item} />}
            </Link>
          </li>
        ))
      ) : (
        <h1>зАгрузка</h1>
      )}
    </ul>
  );
};
