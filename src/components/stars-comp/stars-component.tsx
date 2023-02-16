/* eslint-disable no-negated-condition */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */

import React from 'react';

import starNull from '../../assets/images/book/star.png';
import starGold from '../../assets/images/book/star-gold.png';

import './stars-component.css';

interface IStar {
  ratingNum: number | null;
}

export const StarsComponent: React.FC<IStar> = ({ ratingNum }) => {
  const countStars = 5;
  const numStar = ratingNum && Math.floor(ratingNum);
  const nullStars = ratingNum && numStar && countStars - numStar;

  return (
    <React.Fragment>
      {ratingNum &&
        [...Array(numStar)].map((star, index) => (
          <img key={index} className='single-book__star' src={starGold} alt='star' />
        ))}

      {ratingNum &&
        [...Array(nullStars)].map((star, index) => (
          <img key={index} className='single-book__star' src={starNull} alt='star' />
        ))}

      {!ratingNum &&
        [...Array(countStars)].map((star, index) => (
          <img key={index} className='single-book__star' src={starNull} alt='star' />
        ))}
    </React.Fragment>
  );
};
