/* eslint-disable react-hooks/exhaustive-deps */

import bookCat from '../../assets/images/book/image-cat.png';
import star from '../../assets/images/book/star.png';
import starGold from '../../assets/images/book/star-gold.png';
import { IBoooksingle } from '../../utils/type';

import './book-column-component.css';

export const BookColumnComponent: React.FC<IBoooksingle> = ({ authors, title, rating, image }) => {
  const stopClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className='book-column' data-test-id='card'>
      <div className='book-column__img-block-b'>
        <img
          className='book-column__img-b'
          src={ image ? `https://strapi.cleverland.by${image.url}` : bookCat}
          alt='bookImg'
        />
      </div>

      {rating ? (
        <div className='book-column__stars'>
          <img className='book-column__star' src={starGold} alt='starGold' />
          <img className='book-column__star' src={starGold} alt='starGold' />
          <img className='book-column__star' src={starGold} alt='starGold' />
          <img className='book-column__star' src={starGold} alt='starGold' />
          <img className='book-column__star' src={star} alt='star' />
        </div>
      ) : (
        <span className='book-column__no-coment'>ещё нет оценок</span>
      )}
      <span className='book-container__span'>
        <span className='book-column__title'>{title}</span>
      </span>
      <span className='book-column__author'>{authors}</span>
      <button onClick={stopClick} className='book-column__btn book-column__btn-1' type='button'>
        Забронирована
      </button>
      {/* {statusBtn === '1' && (
        <button onClick={stopClick} className='book-column__btn book-column__btn-1' type='button'>
          {nameBtn}
        </button>
      )}
      {statusBtn === '2' && (
        <button onClick={stopClick} className='book-column__btn book-column__btn-2' type='button'>
          {nameBtn}
        </button>
      )}
      {statusBtn === '3' && (
        <button onClick={stopClick} className='book-column__btn book-column__btn-3' type='button'>
          {nameBtn}
        </button>
      )} */}
    </div>
  );
};
