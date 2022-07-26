import styles from "./Slider.module.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import steak from "../../assets/Bitmapv.png";
// Import Swiper styles

import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
import { Pagination } from "swiper";
import { Button } from "../Button/Button";

export const Slider = () => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}>
        <SwiperSlide>
          <div className='swiper-wrapper'>
            <div className='swiper-wrapper--left'>
              <h3>
                <span className='text-background'>Rabat 10%</span> na pierwsze
                zamówienie!
              </h3>
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj{" "}
                <strong>z promocji -10%</strong>. Spiesz się, czas trwania
                promocji do końca lutego.
              </p>
              <Button position='relative'>
                Zamów online
                <div className='swiper-pagination' />
              </Button>
            </div>
            <div className='swiper-wrapper--right'>
              <img className='swiper-slide' src={steak} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className='swiper-wrapper'>
            <div className='swiper-wrapper--left'>
              <h3>
                <span className='text-background'>Rabat 10%</span> na pierwsze
                zamówienie!
              </h3>
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj{" "}
                <strong>z promocji -10%</strong>. Spiesz się, czas trwania
                promocji do końca lutego.
              </p>
              <Button position='relative'>
                Zamów online
                <div className='swiper-pagination' />
              </Button>
            </div>
            <div className='swiper-wrapper--right'>
              <img className='swiper-slide' src={steak} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className='swiper-wrapper'>
            <div className='swiper-wrapper--left'>
              <h3>
                <span className='text-background'>Rabat 10%</span> na pierwsze
                zamówienie!
              </h3>
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj{" "}
                <strong>z promocji -10%</strong>. Spiesz się, czas trwania
                promocji do końca lutego.
              </p>
              <Button position='relative'>
                Zamów online
                <div className='swiper-pagination' />
              </Button>
            </div>
            <div className='swiper-wrapper--right'>
              <img className='swiper-slide' src={steak} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
