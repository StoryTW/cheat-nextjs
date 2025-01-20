'use client';
import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import IconCard from '@/assets/icons/pay_methods/card.svg?react';

interface ICard {
  data: any;
  active: boolean;
}

const PAY_ARRAY = [
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconCard />,
  },
];

export const Card = ({ data, active }: ICard) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.active]: active,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h3
            className={clsx(styles.title, {
              [styles.active]: active,
            })}
          >
            {data.name}
          </h3>
          <div className={styles.content}>
            <div className={styles.info}>Информация</div>
            <div>asd</div>
          </div>
        </div>

        <div className={styles.foot}>
          <div
            className={clsx(styles.payMethodsText, {
              [styles.active]: active,
            })}
          >
            Способы оплаты
          </div>
          <div
            className={clsx(styles.iconsWrapper, {
              [styles.active]: active,
            })}
          >
            {PAY_ARRAY.map(({ el }, index) => {
              return <div key={index}>{el}</div>;
            })}
          </div>

          <div className={styles.btnWrapper}>
            <button
              className={clsx(styles.btn, {
                [styles.active]: active,
              })}
              tabIndex={-1}
              type='button'
              disabled={!active}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
