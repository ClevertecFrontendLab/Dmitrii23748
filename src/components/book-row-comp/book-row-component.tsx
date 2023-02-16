import catImg from '../../assets/images/book/img-cat-small.png';
import { IBoooksingle } from '../../utils/type';
import { StarsComponent } from '../stars-comp/stars-component';

import './book-row-component.css';

export const BookRowComponent: React.FC<IBoooksingle> = ({ authors, title, rating, image}) => {
  const stopClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  const numStar = rating && Math.floor(rating);

  return (
    <div className='book-row'>
      <div className='book-row__img'>
        <img className='book-row__picture' src={image ? `https://strapi.cleverland.by${image.url}` : catImg} alt='book' />
        <img className='book-row__picture-small' src={image ? `https://strapi.cleverland.by${image.url}` : catImg} alt='book' />
      </div>
      <div className='book-row__content'>
        <span className='book-row__title'>{title}</span>
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
          {/* {statusBtn === '1' && (
            <button onClick={stopClick} className='book-row__btn book-row__btn-1' type='button'>
              {nameBtn}
            </button>
          )}
          {statusBtn === '2' && (
            <button onClick={stopClick} className='book-row__btn book-row__btn-2' type='button'>
              {nameBtn}
            </button>
          )}
          {statusBtn === '3' && (
            <button onClick={stopClick} className='book-row__btn book-row__btn-3' type='button'>
              {nameBtn}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};
