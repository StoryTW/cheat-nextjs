import React from 'react';
import styles from './FaqSection.module.scss';
import { QuestionItem } from '@/components/QuestionItem/QuestionItem';

const DATA = [
  {
    question: 'Почему у нас лушее место для покупки?',
    answer: 'Ответ #1',
  },
  {
    question: 'Как купить читы?',
    answer: 'Ответ #2',
  },
  {
    question: 'Как оплатить покупку?',
    answer: 'Ответ #3',
  },
];

export const FaqSection = () => {
  return (
    <section className={styles.root}>
      <h2>Часто задаваемые вопросы</h2>
      <div className={styles.content}>
        {DATA.map((item, index) => {
          return <QuestionItem key={index} answer={item.answer} question={item.question} />;
        })}
      </div>
    </section>
  );
};
