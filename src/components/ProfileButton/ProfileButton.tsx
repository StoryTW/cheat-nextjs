import React from 'react';
import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  return (
    <button className={styles.btn} tabIndex={-1} type='button'>
      <span className={styles.icon} /> Профиль
    </button>
  );
};
