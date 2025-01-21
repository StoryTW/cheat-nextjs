import React from 'react';
import styles from './PromocodeModal.module.scss';
import { useModalStore } from '@/store/useModalStore';

export const PromocodeModal = () => {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <div className={styles.root}>
      <div className={styles.wrp}>
        <div className={styles.title}>Пожалуйста, укажите телеграм</div>
        <div className={styles.description}>
          Вы выбрали доролнительную услугу, наш менеджер свяжется с вами в ближайшее время
        </div>
        <input type='text' className={styles.input} placeholder='@username' />
        <button className={styles.btn} type='button' tabIndex={-1} onClick={closeModal}>
          Отправить
        </button>
      </div>
    </div>
  );
};
