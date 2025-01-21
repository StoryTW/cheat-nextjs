import React, { useState } from 'react';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';
import styles from './Slider.module.scss';
import clsx from 'clsx';

const ALLOWED_VALUES = [
  { value: 1, label: '1 день', correction: '+ 5.6px' },
  { value: 7, label: '7 дней', correction: '+ 3.2px' },
  { value: 15, label: '15 дней', correction: '+ 0px' },
  { value: 30, label: '30 дней', correction: '- 6px' },
];

const MAX_VALUE = 30;

export const Slider = () => {
  const [value, setValue] = useState([1]);

  const handleValueChange = (newValue) => {
    const closestValue = ALLOWED_VALUES.reduce((prev, curr) =>
      Math.abs(curr.value - newValue[0]) < Math.abs(prev.value - newValue[0]) ? curr : prev,
    );
    setValue([closestValue.value]);
  };

  return (
    <Root className={styles.root} value={value} max={30} step={1} onValueChange={handleValueChange}>
      <Track className={styles.track}>
        {ALLOWED_VALUES.map(({ value: markValue, label, correction }) => {
          const position = (markValue / MAX_VALUE) * 100;
          const isActive = value[0] >= markValue;

          return (
            <div
              key={markValue}
              className={styles.markContainer}
              style={{
                left: `calc(${position}% ${correction})`,
              }}
            >
              <span className={styles.label}>{label}</span>
              <span className={clsx(styles.mark, { [styles.active]: isActive })} />
            </div>
          );
        })}
        <Range className={styles.range} />
      </Track>
      <Thumb className={styles.thumb} aria-label='day' />
    </Root>
  );
};
