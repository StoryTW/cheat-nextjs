'use client';
import React, { useState } from 'react';
import styles from './TariffsSection.module.scss';
import { SwiperButtons } from '@/components/SwiperInfo/SwiperButtons/SwiperButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperRef } from '@/utils/useSwiperRef';
import { Card } from './Card/Card';
import { useMediaQuery } from 'react-responsive';

interface ITariffsSection {
  data: any;
}

export const TariffsSection = ({ data }: ITariffsSection) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  const isTabletL = useMediaQuery({ query: '(max-width: 912px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <section className={styles.root}>
      <>
        <Swiper
          loop
          slidesPerView={isMobile ? 1 : isTabletL ? 2 : 3}
          spaceBetween={38}
          centeredSlides={!isTabletL}
          simulateTouch={isTabletL || isMobile ? true : false}
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
