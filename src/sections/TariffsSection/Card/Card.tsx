'use client';
import React, { useState } from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import IconCard from '@/assets/icons/pay_methods/card.svg?react';
import IconSbp from '@/assets/icons/pay_methods/sbp.svg?react';
import IconYoomoney from '@/assets/icons/pay_methods/yoomoney.svg?react';
import IconEth from '@/assets/icons/pay_methods/eth.svg?react';
import IconTon from '@/assets/icons/pay_methods/ton.svg?react';
import { Slider } from '@/components/Slider/Slider';
import IconArrow from '@/assets/icons/icon-arrow-s.svg?react';
import IconCheckbox from '@/assets/icons/checkbox.svg?react';
import { AnimatePresence } from 'motion/react';
import { ToggleGroup } from '@/components/ToggleGroup/ToggleGroup';

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

const options = [
  {
    id: '1',
    name: 'Опция 1',
  },
  {
    id: '2',
    name: 'Опция 2',
  },
  {
    id: '3',
    name: 'Опция 3',
  },
  {
    id: '4',
    name: 'Опция 4',
  },
  {
    id: '5',
    name: 'Опция 5',
  },
];

export const Card = ({ data, active }: ICard) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  const [selectedOptions, setSelectedOptions] = useState<{ id: string; name: string }[]>([]);

  const handleSelect = (item: { id: string; name: string }) => {
    setSelectedOptions((prev) =>
      prev.some((el) => el.id === item.id)
        ? prev.filter((el) => el.id !== item.id)
        : [...prev, item],
    );
  };

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
            <div className={styles.dropdown} onClick={toggle}>
              <div className={styles.dropdownText}>Дополнительно</div>
              <div
                className={clsx(styles.arrow, {
                  [styles.open]: open,
                })}
              >
                <IconArrow />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <div className={styles.ddList}>
                {options.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={clsx(styles.option, {
                        [styles.selected]: selectedOptions.some((el) => el.id === item.id),
                      })}
                      onClick={() => handleSelect(item)}
                    >
                      {item.name}
                      {selectedOptions.some((el) => el.id === item.id) && <IconCheckbox />}
                    </div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.foot}>
          {active && (
            <div className={styles.sliderWrapper}>
              <div className={styles.label}>Выберите время подписки</div>

              <Slider />
              <ToggleGroup />

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
