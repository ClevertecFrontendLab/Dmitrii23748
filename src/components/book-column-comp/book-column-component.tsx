/* eslint-disable react-hooks/exhaustive-deps */

import bookCat from '../../assets/images/book/image-cat.png';
import { IBoooksingle } from '../../utils/type';
import { StarsComponent } from '../stars-comp/stars-component';

import './book-column-component.css';

export const BookColumnComponent: React.FC<IBoooksingle> = ({ authors, title, rating, image }) => {
  const stopClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  const numStar = rating && Math.floor(rating);

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
          <StarsComponent ratingNum={numStar}/>
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
    </div>
  );
};
