'use client';
import React, { FC } from 'react';
import styles from './ClientGameNavigation.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface IClientGameNavigation {
  data: any;
}

export const ClientGameNavigation: FC<IClientGameNavigation> = ({ data }) => {
  const pathname = usePathname();

  return (
    <div className={styles.root}>
      {data?.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/${item.slug}`}
            className={clsx(styles.link, {
              [styles.active]: pathname === `/${item.slug}`,
            })}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
