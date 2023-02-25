/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';

import bookCat from '../../assets/images/book/image-cat.png';
import { IBoooksingle } from '../../utils/type';
import { StarsComponent } from '../stars-comp/stars-component';

import './book-column-component.css';

export const Higlight = (props: any) => {
  const { filter, str } = props;

  if (!filter) return str;
  const regex: any = new RegExp(filter, 'ig');
  const matchValue = str.match(regex);

  if (matchValue) {
    return str.split(regex).map((s: any, index: number, arr: any) => {
      if (index < arr.length - 1) {
        const c = matchValue.shift();

        return (
          <React.Fragment key={index}>
            {s}
            <span className='higlight' data-test-id="highlight-matches">{c}</span>
          </React.Fragment>
        );
      }

      return s;
    });
  }

  return str;
};

export const BookColumnComponent: React.FC<IBoooksingle> = ({ authors, title, rating, image }) => {
  const stopClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  const numStar = rating && Math.floor(rating);
  const light = useCallback(
    (str: any) => <Higlight filter={`${localStorage.getItem('search')}`} str={str} />,
    [localStorage.getItem('search')]
  );

  return (
    <div className='book-column' data-test-id='card'>
      <div className='book-column__img-block-b'>
        <img
          className='book-column__img-b'
          src={image ? `https://strapi.cleverland.by${image.url}` : bookCat}
          alt='bookImg'
        />
      </div>

      {rating ? (
        <div className='book-column__stars'>
          <StarsComponent ratingNum={numStar} />
        </div>
      ) : (
        <span className='book-column__no-coment'>ещё нет оценок</span>
      )}
      <span className='book-container__span'>
        <span className='book-column__title'>{light(title)}</span>
      </span>
      <span className='book-column__author'>{authors}</span>
      <button className='book-column__btn book-column__btn-1' type='button' onClick={stopClick}>
        Забронирована
      </button>
    </div>
  );
};
