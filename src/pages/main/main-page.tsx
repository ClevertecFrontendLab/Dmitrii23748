import React, { useEffect, useState } from 'react';

import { BooksComponent } from '../../components/books-comp';
import { ControlComponent } from '../../components/control-comp';
import { getBooks } from '../../features/books/booksSlice';
import { useAppDispatch } from '../../hook';
import { IBurger } from '../../utils/type';

import './main-page.css';

export const MainPage: React.FC<IBurger> = ({ closeBurger }) => {
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState(false);

  const togleBgColor = () => {
    setBgColor(!bgColor);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <React.Fragment>
      <ControlComponent bgColor={bgColor} togleBgColor={togleBgColor} />
      <BooksComponent bgColor={bgColor} closeBurger={closeBurger} />
    </React.Fragment>
  );
};
