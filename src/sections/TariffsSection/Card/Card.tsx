'use client';
import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import IconCard from '@/assets/icons/pay_methods/card.svg?react';
import IconSbp from '@/assets/icons/pay_methods/sbp.svg?react';
import IconYoomoney from '@/assets/icons/pay_methods/yoomoney.svg?react';
import IconEth from '@/assets/icons/pay_methods/eth.svg?react';
import IconTon from '@/assets/icons/pay_methods/ton.svg?react';
import { Slider } from '@/components/Slider/Slider';

interface ICard {
  data: any;
  active: boolean;
}

const PAY_ARRAY = [
  {
    el: <IconSbp />,
  },
  {
    el: <IconCard />,
  },
  {
    el: <IconYoomoney />,
  },
  {
    el: <IconTon />,
  },
  {
    el: <IconEth />,
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
          {active && (
            <div className={styles.sliderWrapper}>
              <div className={styles.label}>Выберите время подписки</div>

              <Slider />

              <div className={styles.sliderDescription}>При оплате 7 дней вы сэкономите 700р *</div>
            </div>
          )}

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
