'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image src={'/img/logo.png'} alt='logo' width={64} height={64} className={styles.img} />
    </Link>
  );
};
