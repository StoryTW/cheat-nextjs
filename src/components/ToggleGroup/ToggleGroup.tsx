import React, { useState } from 'react';
import styles from './ToggleGroup.module.scss';
import clsx from 'clsx';

const DATA = [
  {
    name: '1 День',
    value: '1',
  },
  {
    name: '7 Дней',
    value: '7',
  },
  {
    name: '15 Дней',
    value: '15',
  },
  {
    name: '30 Дней',
    value: '30',
  },
];

export const ToggleGroup = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <div className={styles.root}>
      {DATA.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => setValue(item.value)}
            className={clsx(styles.btn, {
              [styles.active]: item.value === value,
            })}
            type='button'
            tabIndex={-1}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
