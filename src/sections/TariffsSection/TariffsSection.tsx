'use client';
import React, { useState } from 'react';
import styles from './TariffsSection.module.scss';
import { SwiperButtons } from '@/components/SwiperInfo/SwiperButtons/SwiperButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperRef } from '@/utils/useSwiperRef';
import { Card } from './Card/Card';

interface ITariffsSection {
  data: any;
}

export const TariffsSection = ({ data }: ITariffsSection) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  return (
    <section className={styles.root}>
      <>
        <Swiper
          loop
          slidesPerView={3}
          spaceBetween={38}
          centeredSlides
          simulateTouch={false}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles.swiper}
          wrapperClass={styles.swiperWrapper}
        >
          {data?.tariffs?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card key={index} data={item} active={activeIndex === index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SwiperButtons handlePrev={handlePrev} handleNext={handleNext} />
      </>
    </section>
  );
};
