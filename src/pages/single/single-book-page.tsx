/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import arrow from '../../assets/images/arrow/arrow-reviews.svg';
import star from '../../assets/images/book/star.png';
import starGold from '../../assets/images/book/star-gold.png';
import avatar from '../../assets/images/single/avatar-small.png';
import { ImagesSliderComponent } from '../../components/images-slider-comp/images-slider-component';
import { NameNavComponent } from '../../components/name-nav-comp';
import { arrayBooks } from '../../utils/array-books';
import { IBooks, IBurger } from '../../utils/type';
import { useResize } from '../../utils/useResize';

import './single-book-page.css';

export const SingleBookPage: React.FC<IBurger> = ({ closeBurger, burger, removeArrowOrange }) => {
  const { idbook } = useParams();
  const { widthRes } = useResize();

  const [bookArr, setBook] = useState<IBooks[]>(arrayBooks);
  const [reviews, setReviews] = useState(true);
  const [widthScreenRes, setWidthScreenRes] = useState(widthRes);

  const toggleRewievs = () => {
    setReviews(!reviews);
  };

  useEffect(() => {
    const arrBook = arrayBooks.filter((item) => item.id === Number(idbook));

    setBook(arrBook);
  }, [idbook]);

  useEffect(() => {
    setWidthScreenRes(widthRes)
  }, [widthRes])

  return (
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
            <span className='breadpoint-text breadpoint-text__elem'>Бизнес книги </span>
            <span className='breadpoint-text'>{bookArr[0].title}</span>
          </div>
        </div>
      </div>
      <div className='container'>
        {bookArr && (
          <React.Fragment>
            <div className='single-book__main'>
              <div className='single-book__main-img'>
                <ImagesSliderComponent imagesSliderArr={bookArr[0].imagesSlider} />
                {/* <img className='single-book__main-img' src={bookArr[0].imgSrc ? bookImg : catImg} alt='book' /> */}
                {/* <img className='single-book_768' src={single768} alt='book' /> */}
              </div>

              <div className='single-book__main-text'>
                <h2 className='single-book__main-title'>
                  Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                </h2>
                <p className='single-book__main-author'>Адитья Бхаргава, 2019</p>
                {bookArr[0].statusBtn === '1' && (
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
                )}
              </div>
              <div className='single-book__main-about'>
                <p className='single-book__main-aboutbook'>О книге</p>
                <p className='single-book__main-desc single-book__main-desc_top'>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на
                  это свое время?
                </p>
                <p className='single-book__main-desc'>
                  Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                  алгоритмы — это веселое и увлекательное занятие.
                </p>
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
                <span className='single-book__star-rating'>4.3</span>
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
                      <span className='info-text__item-desc'>Питер</span>
                    </li>
                    <li className='single-book__info-item'>
                      <span className='info-text__item-desc'>2019</span>
                    </li>
                    <li className='single-book__info-item'>
                      <span className='info-text__item-desc'>288</span>
                    </li>
                    <li className='single-book__info-item'>
                      <span className='info-text__item-desc'>Мягкая обложка</span>
                    </li>
                    <li className='single-book__info-item single-book__info-item_last'>
                      <span className='info-text__item-desc'>70х100</span>
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
                      <span className='info-text__item-desc'>Компьютерная литература</span>
                    </li>
                    <li className='single-book__info-item single-book__info-item_360'>
                      <span className='info-text__item-desc'>370 г</span>
                    </li>
                    <li className='single-book__info-item single-book__info-item_360'>
                      <span className='info-text__item-desc'>978-5-4461-0923-4</span>
                    </li>
                    <li className='single-book__info-item single-book__info-item_v single-book__info-item_360'>
                      <span className='info-text__item-desc'>16+</span>
                    </li>
                    <li className='single-book__info-item single-book__info-item_last single-book__info-item_360'>
                      <span className='info-text__item-desc info-text__item-desc_last'>
                        ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='single-book__reviews'>
              <div className='single-book__reviews-count-block'>
                <span className={reviews ? 'single-book__reviews-title' : 'single-book__reviews-title reviews-line'}>
                  Отзывы
                </span>
                <span className='single-book__reviews-count'>2</span>
                <button
                  className='single-book__reviews-arrow'
                  type='button'
                  onClick={toggleRewievs}
                  data-test-id='button-hide-reviews'
                >
                  <img className={reviews ? '' : 'reviews-arrow'} src={arrow} alt='arrow' />
                </button>
              </div>
              <ul className={reviews ? 'single-book__reviews-list' : 'single-book__reviews-list reviews-none'}>
                <li className='single-book__reviews-item'>
                  <div className='single-book__reviews-person'>
                    <img className='single-book__reviews-avatar' src={avatar} alt='avatar' />
                    <div className='single__book-person'>
                      <span className='single-book__reviews-name'>Иван Иванов</span>
                      <span className='single-book__reviews-date'>5 января 2019</span>
                    </div>
                  </div>
                  <div className='single-book__block-stars single-book__block-stars_reviews'>
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star-nogold' src={star} alt='star' />
                  </div>
                </li>
                <li className='single-book__reviews-item'>
                  <div className='single-book__reviews-person'>
                    <img className='single-book__reviews-avatar' src={avatar} alt='avatar' />
                    <div className='single__book-person'>
                      <span className='single-book__reviews-name'>Николай Качков</span>
                      <span className='single-book__reviews-date'>20 июня 2018</span>
                    </div>
                  </div>
                  <div className='single-book__block-stars single-book__block-stars_reviews'>
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star-nogold' src={star} alt='star' />
                  </div>
                  <p className='single-book__reviews-text'>
                    Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не
                    оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                    современных методик предоставляет широкие возможности для позиций, занимаемых участниками в
                    отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики
                    выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций —
                    глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет
                    сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в
                    посмешище, хотя само их существование приносит несомненную пользу обществу.
                  </p>
                </li>
                <li className='single-book__reviews-item'>
                  <div className='single-book__reviews-person'>
                    <img className='single-book__reviews-avatar' src={avatar} alt='avatar' />
                    <div className='single__book-person'>
                      <span className='single-book__reviews-name'>Екатерина Беляева</span>
                      <span className='single-book__reviews-date'>18 февраля 2018</span>
                    </div>
                  </div>
                  <div className='single-book__block-stars single-book__block-stars_reviews'>
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star' src={starGold} alt='star' />
                    <img className='single-book__star-nogold' src={star} alt='star' />
                  </div>
                </li>
              </ul>
            </div>
            <button className='single-book__btn single-book__btn_bottom' type='button'>
              оценить книгу
            </button>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};
