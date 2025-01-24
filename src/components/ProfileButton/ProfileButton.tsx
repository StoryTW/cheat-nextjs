'use client';
import React from 'react';
import styles from './ProfileButton.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const ProfileButton = () => {
  const router = useRouter();

  const navigateProfile = () => router.push('/profile');

  return (
    <button className={styles.btn} tabIndex={-1} type='button' onClick={navigateProfile}>
      <Image src={'/img/logo.png'} alt='logo' width={24} height={24} className={styles.img} />
      Профиль
    </button>
  );
};
