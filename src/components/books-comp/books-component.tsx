/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBookSingle } from '../../features/book-single/bookSingleSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';
import { BookColumnComponent } from '../book-column-comp';
import { BookRowComponent } from '../book-row-comp';
import { ErrorComponent } from '../error-comp';
import { LoadComponent } from '../load-comp';

import './books-component.css';

export const BooksComponent: React.FC<IBurger> = ({ bgColor, closeBurger }) => {
  const dispatch = useAppDispatch();
  const { namecategory } = useParams();
  const { books, loadingBoook, errorBook } = useAppSelector((state) => state.booksRed);
  const { category, loadingCategory, error } = useAppSelector((state) => state.categoryRed);

  const [stateBooks, setStateBooks] = useState([...books]);

  const filterssddfwsa = () => {
    const sdgsg = category.filter((item) => item.path.toLowerCase().includes(namecategory!.toLowerCase()));

    const sfsafs = books.filter((item) => item.categories[0].toLowerCase().includes(sdgsg[0].name.toLowerCase()));

    setStateBooks(sfsafs);
  };

  useEffect(() => {
    setStateBooks([...books]);

    if (namecategory !== 'all') {
      filterssddfwsa();
    }
  }, [books, namecategory]);

  return (
    <React.Fragment>
      {errorBook === 'error' || error === 'error' ? <ErrorComponent /> : null}

      <ul className={bgColor ? 'books' : 'books-flex'} onClick={closeBurger}>
        {!loadingBoook && !loadingCategory ? (
          stateBooks &&
          stateBooks.map((item) => (
            <li className={bgColor ? 'book-row__comp' : 'book'} key={item.id}>
              <Link className='single-book' to={`${item.id}`} onClick={() => dispatch(getBookSingle(item.id))}>
                {bgColor ? <BookRowComponent {...item} /> : <BookColumnComponent {...item} />}
              </Link>
            </li>
          ))
        ) : (
          <LoadComponent />
        )}
        {stateBooks.length === 0 &&
        localStorage.getItem('searchFlag') === 'true' ? (
          <div className='blocks-book__no-category'>
            <span className='text__no-category'  data-test-id="search-result-not-found">По запросу ничего не найдено</span>
          </div>
        ) : null}
        {stateBooks.length === 0 &&
        localStorage.getItem('searchFlag') === 'false' ? (
          <div className='blocks-book__no-category'>
            <span className='text__no-category'  data-test-id="empty-category">В этой категории книг ещё нет</span>
          </div>
        ) : null}
      </ul>
    </React.Fragment>
  );
};
