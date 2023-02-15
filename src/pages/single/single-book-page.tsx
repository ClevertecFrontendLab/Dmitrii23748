/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-negated-condition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import arrow from '../../assets/images/arrow/arrow-reviews.svg';
import star from '../../assets/images/book/star.png';
import starGold from '../../assets/images/book/star-gold.png';
import avatar from '../../assets/images/single/avatar-small.png';
import { ErrorComponent } from '../../components/error-comp';
import { ImagesSliderComponent } from '../../components/images-slider-comp/images-slider-component';
import { LoadComponent } from '../../components/load-comp';
import { NameNavComponent } from '../../components/name-nav-comp';
import { getBookSingle } from '../../features/book-single/bookSingleSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { IBurger } from '../../utils/type';
import { useResize } from '../../utils/useResize';

import './single-book-page.css';

export const SingleBookPage: React.FC<IBurger> = ({ closeBurger, burger, removeArrowOrange }) => {
  const { idbook } = useParams();
  const { widthRes } = useResize();

  const [reviews, setReviews] = useState(true);
  const [widthScreenRes, setWidthScreenRes] = useState(widthRes);

  const toggleRewievs = () => {
    setReviews(!reviews);
  };

    const dispatch = useAppDispatch();
  const { bookSingle, loadingBoookSingle, error } = useAppSelector((state) => state.bookSingleRed);

    useEffect(() => {
      if (idbook) {
        dispatch(getBookSingle(idbook));
      }
    }, [dispatch]);

  useEffect(() => {
    setWidthScreenRes(widthRes);
  }, [widthRes]);

  return (
    <div>
      {!loadingBoookSingle ? (
        <section className='single-book' onClick={closeBurger}>
          {idbook ? (
            <NameNavComponent
              burger={burger}
              closeBurger={closeBurger}
              removeArrowOrange={removeArrowOrange}
              idbook={idbook}
              widthScreenRes={widthScreenRes}
            />
          ) : null}
          <div className='single-book__breadpoint'>
            <div className='container'>
              <div className='breadpoint-text__flex'>
                <span className='breadpoint-text breadpoint-text__elem'>
                  {bookSingle.categories && bookSingle.categories.length > 0
                    ? bookSingle.categories[0]
                    : 'Бизнес книги'}
                </span>
                <span className='breadpoint-text'>{bookSingle.title}</span>
              </div>
            </div>
          </div>
          {error === 'error' ? (
            <ErrorComponent />
          ) : (
            <div className='container'>
              {bookSingle && (
                <React.Fragment>
                  <div className='single-book__main'>
                    <div className='single-book__main-img'>
                      <ImagesSliderComponent key={bookSingle.id} imagesSliderArr={bookSingle.images} />
                    </div>

                    <div className='single-book__main-text'>
                      <h2 className='single-book__main-title'>{bookSingle.title}</h2>
                      <p className='single-book__main-author'>
                        {bookSingle.authors}, {bookSingle.issueYear}
                      </p>
                      <button className='single-book__btn btn-1' type='button'>
                        Забронировать
                      </button>
                      {/* {bookArr[0].statusBtn === '1' && (
                            <button className='single-book__btn btn-1' type='button'>
                              {bookArr[0].nameBtn}
                            </button>
                          )}
                          {bookArr[0].statusBtn === '2' && (
                            <button className='single-book__btn btn-2' type='button'>
                              {bookArr[0].nameBtn}
                            </button>
                          )}
                          {bookArr[0].statusBtn === '3' && (
                            <button className='single-book__btn btn-3' type='button'>
                              {bookArr[0].nameBtn}
                            </button>
                          )} */}
                    </div>
                    <div className='single-book__main-about'>
                      <p className='single-book__main-aboutbook'>О книге</p>
                      <p className='single-book__main-desc single-book__main-desc_top'>{bookSingle.description}</p>
                    </div>
                  </div>

                  <div className='single-book__stars'>
                    <p className='single-book__stars-p'>Рейтинг</p>
                    <div className='single-book__block-stars'>
                      <img className='single-book__star' src={starGold} alt='star' />
                      <img className='single-book__star' src={starGold} alt='star' />
                      <img className='single-book__star' src={starGold} alt='star' />
                      <img className='single-book__star' src={starGold} alt='star' />
                      <img className='single-book__star-nogold' src={star} alt='star' />
                      <span
                        className={bookSingle.rating ? 'single-book__star-rating' : 'single-book__star-rating-text'}
                      >
                        {bookSingle.rating ? bookSingle.rating : 'ещё нет оценок'}
                      </span>
                    </div>
                  </div>
                  <div className='single-book__info'>
                    <p className='single-book__info-title'>Подробная информация</p>
                    <div className='single-book__info-blocks'>
                      <div className='single-book__info-block-left'>
                        <ul className='single-book__info-list single-book__info-text_desc'>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-title'>Издательство</span>
                          </li>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-title'>Год издания</span>
                          </li>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-title'>Страниц</span>
                          </li>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-title'>Переплет</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_last'>
                            <span className='info-text__item-title'>Формат</span>
                          </li>
                        </ul>
                        <ul className='single-book__info-list'>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-desc'>{bookSingle.publish}</span>
                          </li>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-desc'>{bookSingle.issueYear}</span>
                          </li>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-desc'>{bookSingle.pages}</span>
                          </li>
                          <li className='single-book__info-item'>
                            <span className='info-text__item-desc'>{bookSingle.cover}</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_last'>
                            <span className='info-text__item-desc'>{bookSingle.format}</span>
                          </li>
                        </ul>
                      </div>

                      <div className='single-book__info-block-right'>
                        <ul className='single-book__info-list'>
                          <li className='single-book__info-item single-book__info-item_g single-book__info-item_360'>
                            <span className='info-text__item-title'>Жанр</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_360'>
                            <span className='info-text__item-title'>Вес</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_360'>
                            <span className='info-text__item-title'>ISBN</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_v single-book__info-item_360'>
                            <span className='info-text__item-title'>Возрастные ограничения</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_last single-book__info-item_360'>
                            <span className='info-text__item-title'>Изготовитель</span>
                          </li>
                        </ul>
                        <ul className='single-book__info-list single-book__info-list_desc-right'>
                          <li className='single-book__info-item single-book__info-item_g single-book__info-item_360'>
                            <span className='info-text__item-desc'>
                              {bookSingle.categories && bookSingle.categories.length > 0
                                ? bookSingle.categories[0]
                                : null}
                            </span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_360'>
                            <span className='info-text__item-desc'>{bookSingle.weight} г</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_360'>
                            <span className='info-text__item-desc'>{bookSingle.ISBN}</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_v single-book__info-item_360'>
                            <span className='info-text__item-desc'>16+</span>
                          </li>
                          <li className='single-book__info-item single-book__info-item_last single-book__info-item_360'>
                            <span className='info-text__item-desc info-text__item-desc_last'>
                              {bookSingle.producer}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='single-book__reviews'>
                    <div className='single-book__reviews-count-block'>
                      <span
                        className={reviews ? 'single-book__reviews-title' : 'single-book__reviews-title reviews-line'}
                      >
                        Отзывы
                      </span>

                      <span className='single-book__reviews-count'>
                        {bookSingle.comments ? bookSingle.comments.length : '0'}
                      </span>
                      {bookSingle.comments && bookSingle.comments.length >= 1 ? (
                        <button
                          className='single-book__reviews-arrow'
                          type='button'
                          onClick={toggleRewievs}
                          data-test-id='button-hide-reviews'
                        >
                          <img className={reviews ? '' : 'reviews-arrow'} src={arrow} alt='arrow' />
                        </button>
                      ) : null}
                    </div>
                    <ul className={reviews ? 'single-book__reviews-list' : 'single-book__reviews-list reviews-none'}>
                      {bookSingle.comments
                        ? bookSingle.comments.map((item: any) => (
                            <li className='single-book__reviews-item'>
                              <div className='single-book__reviews-person'>
                                <img
                                  className='single-book__reviews-avatar'
                                  src={
                                    item.user.avatarUrl ? ` https://strapi.cleverland.by${item.user.avatarUrl}` : avatar
                                  }
                                  alt='avatar'
                                />
                                <div className='single__book-person'>
                                  <span className='single-book__reviews-name'>{item.user.firstName}</span>
                                  <span className='single-book__reviews-date'>{item.user.lastName}</span>
                                </div>
                              </div>
                              <div className='single-book__block-stars single-book__block-stars_reviews'>
                                <img className='single-book__star' src={starGold} alt='star' />
                                <img className='single-book__star' src={starGold} alt='star' />
                                <img className='single-book__star' src={starGold} alt='star' />
                                <img className='single-book__star' src={starGold} alt='star' />
                                <img className='single-book__star-nogold' src={star} alt='star' />
                              </div>
                              <p className='single-book__reviews-text'>{item.text}</p>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <button className='single-book__btn single-book__btn_bottom' type='button'>
                    оценить книгу
                  </button>
                </React.Fragment>
              )}
            </div>
          )}
        </section>
      ) : (
        <LoadComponent />
      )}
    </div>
  );
};
