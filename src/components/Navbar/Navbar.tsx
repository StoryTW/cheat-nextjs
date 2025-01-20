import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

const DATA = [
  {
    href: '/',
    text: 'Пункт меню',
  },
  {
    href: '/',
    text: 'Пункт меню',
  },
  {
    href: '/',
    text: 'Пункт меню',
  },
  {
    href: '/',
    text: 'Пункт меню',
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {DATA.map((item, i) => {
        return (
          <Link href={item.href} key={i} className={styles.link}>
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
};
