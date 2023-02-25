/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';

import catImg from '../../assets/images/book/img-cat-small.png';
import { IBoooksingle } from '../../utils/type';
import { Higlight } from '../book-column-comp/book-column-component';
import { StarsComponent } from '../stars-comp/stars-component';

import './book-row-component.css';

export const BookRowComponent: React.FC<IBoooksingle> = ({ authors, title, rating, image}) => {
  const stopClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  const numStar = rating && Math.floor(rating);

  const light = useCallback(
    (str: any) => <Higlight filter={`${localStorage.getItem('search')}`} str={str} />,
    [localStorage.getItem('search')]
  );

  return (
    <div className='book-row'>
      <div className='book-row__img'>
        <img className='book-row__picture' src={image ? `https://strapi.cleverland.by${image.url}` : catImg} alt='book' />
        <img className='book-row__picture-small' src={image ? `https://strapi.cleverland.by${image.url}` : catImg} alt='book' />
      </div>
      <div className='book-row__content'>
        <span className='book-row__title'>{light(title)}</span>
        <span className='book-row__author'>{authors}</span>
        <div className='book-row__stars-btn'>
          {rating ? (
            <div className='stars'>
              <StarsComponent ratingNum={numStar}/>
            </div>
          ) : (
            <span className='no-comment'>ещё нет оценок</span>
          )}
         <button onClick={stopClick} className='book-row__btn book-row__btn-1' type='button'>
              Забронирована
            </button>
        </div>
      </div>
    </div>
  );
};
