import React, { useEffect, useState } from 'react';

import { BooksComponent } from '../../components/books-comp';
import { ControlComponent } from '../../components/control-comp';
import { getBooks } from '../../features/books/booksSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';

import './main-page.css';

export const MainPage: React.FC<IBurger> = ({ closeBurger }) => {
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState(false);
  const { errorBook } = useAppSelector((state) => state.booksRed);
  const { error } = useAppSelector((state) => state.categoryRed);

  const togleBgColor = () => {
    setBgColor(!bgColor);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <React.Fragment>
      {errorBook === 'error' || error === 'error' ? (
        null
      ) : (
        <ControlComponent bgColor={bgColor} togleBgColor={togleBgColor} />
      )}

      <BooksComponent bgColor={bgColor} closeBurger={closeBurger} />
    </React.Fragment>
  );
};
