import React from 'react';
import IconBurger from '@/assets/icons/burger.svg?react';
import styles from './Burger.module.scss'

export const Burger = () => {
  return (
    <button className={styles.root}>
      <IconBurger />
    </button>
  );
};
