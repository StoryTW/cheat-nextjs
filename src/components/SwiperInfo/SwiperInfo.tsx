'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useSwiperRef } from '@/utils/useSwiperRef';
import styles from './SwiperInfo.module.scss';
import Image from 'next/image';
import { SwiperButtons } from './SwiperButtons/SwiperButtons';

export const SwiperInfo: FC<{ data: any }> = ({ data }) => {
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data?.info?.images?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.item}>
                <Image src={item.src} alt={item.alt} fill />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperButtons handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
};
