/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import { IImgSlider } from '../../utils/type';

import './images-slider-component.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const ImagesSliderComponent: React.FC<IImgSlider> = ({ imagesSliderArr }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();


  return (
    <React.Fragment>
      <Swiper
        data-test-id='slide-big'
        spaceBetween={10}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={{ clickable: true }}
        className='img-slider__big'
      >
        {imagesSliderArr?.map((slide, index) => (
          <SwiperSlide key={index}>
            <img className='img-slider__big-slide' src={slide} alt='slider-img single-book_768' />
          </SwiperSlide>
        ))}
      </Swiper>
      {imagesSliderArr && imagesSliderArr.length > 1 ? (
        <Swiper
          data-test-id='slide-mini'
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          modules={[FreeMode, Navigation, Thumbs]}
          slidesPerView={3}
          className='img-slider__small'
        >
          {imagesSliderArr?.map((slide, index) => (
            <SwiperSlide key={index}>
              <img className='img-slider__small-slide' src={slide} alt='slider-img' />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </React.Fragment>
  );
};
