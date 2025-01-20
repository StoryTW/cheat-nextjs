import React, { FC } from 'react';
import IconArrow from '@/assets/icons/swiper-btn.svg?react';
import styles from './SwiperButtons.module.scss';
import clsx from 'clsx';

interface ISwiperButtons {
  handlePrev: () => void;
  handleNext: () => void;
}

export const SwiperButtons: FC<ISwiperButtons> = ({ handlePrev, handleNext }) => {
  return (
    <div className={styles.root}>
      <button className={clsx(styles.btn, styles.prev)} onClick={handlePrev}>
        <IconArrow />
      </button>
      <button className={clsx(styles.btn, styles.next)} onClick={handleNext}>
        <IconArrow />
      </button>
    </div>
  );
};
