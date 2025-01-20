'use client';
import React, { FC, useState } from 'react';
import styles from './QuestionItem.module.scss';
import { motion } from 'motion/react';
import clsx from 'clsx';
import IconArrow from '@/assets/icons/arrow.svg?react';

const cardVariants = {
  open: { height: 'auto', opacity: 1 },
  close: {
    height: 0,
    overflow: 'hidden',
    opacity: 0,
  },
};

interface IQuestionItem {
  question: string;
  answer: string;
}

export const QuestionItem: FC<IQuestionItem> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  return (
    <div
      className={clsx(styles.questionList_item, {
        [styles.active]: isActive,
      })}
      onClick={toggle}
    >
      <div className={styles.questionLabel}>
        <h3 className={styles.label_question}>{question}</h3>
        <div
          className={clsx(styles.arrow, {
            [styles.active]: isActive,
          })}
        >
          <IconArrow />
        </div>
      </div>
      <motion.div
        variants={cardVariants}
        initial='close'
        exit='close'
        animate={isActive ? 'open' : 'close'}
        transition={{
          duration: 0.8,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      >
        <div className={styles.answerLabel}>{answer}</div>
      </motion.div>
    </div>
  );
};
