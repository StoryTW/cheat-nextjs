import React from 'react';
import styles from './EditModal.module.scss';
import { useModalStore } from '@/store/useModalStore';

export const EditModal = () => {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <div className={styles.root}>
      <div className={styles.wrp}>
        <div className={styles.title}>Редактирование</div>
        <div className={styles.avatar} />

        <input type='text' className={styles.input} placeholder='e@mail.ru' />
        <input type='text' className={styles.input} placeholder='Login' />
        <input type='text' className={styles.input} placeholder='Password' />

        <button className={styles.btn} type='button' tabIndex={-1} onClick={closeModal}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
