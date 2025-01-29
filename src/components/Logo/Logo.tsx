'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Logo.module.scss';

interface ILogo {
  withText?: boolean;
}

export const Logo: FC<ILogo> = ({ withText = false }) => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image src={'/img/logo.png'} alt='logo' width={96} height={96} className={styles.img} />
      {withText && (
        <Image
          src={'/img/logo-text.svg'}
          alt='logo'
          width={289}
          height={47}
          className={styles.imgText}
        />
      )}
    </Link>
  );
};
