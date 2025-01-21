'use client';
import React from 'react';
import styles from './ProfileButton.module.scss';
import { useRouter } from 'next/navigation';

export const ProfileButton = () => {
  const router = useRouter();

  const navigateProfile = () => router.push('/profile');

  return (
    <button className={styles.btn} tabIndex={-1} type='button' onClick={navigateProfile}>
      <span className={styles.icon} /> Профиль
    </button>
  );
};
