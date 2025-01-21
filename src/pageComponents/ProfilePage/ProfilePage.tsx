'use client';
import React, { FC } from 'react';
import styles from './ProfilePage.module.scss';
import clsx from 'clsx';
import { useModalStore } from '@/store/useModalStore';
import { EditModal } from '@/components/ModalContent/EditModal/EditModal';

interface IProfilePage {
  data: any;
}

export const ProfilePage: FC<IProfilePage> = ({ data }) => {
  const openModal = useModalStore((state) => state.openModal);

  const handleEdit = () => {
    openModal(<EditModal />);
  };

  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <div className={clsx(styles.box, styles.profile)}>
          <div className={styles.profileWrapper}>
            <div className={styles.avatar} />
            <div>
              <div className={styles.profileName}>{data.account.name}</div>
              <div className={styles.profileId}>
                <span>ID:</span> {data.account.id}
              </div>
              <div className={styles.profileEmail}>
                <span>E-mail:</span> {data.account.email}
              </div>

              <button
                className={styles.profileBtn}
                onClick={handleEdit}
                type='button'
                tabIndex={-1}
              >
                РЕДАКТИРОВАТЬ
              </button>
            </div>
          </div>
        </div>

        <div className={clsx(styles.box, styles.info)}>info</div>

        <div className={clsx(styles.box, styles.list)}>list</div>
      </div>
    </main>
  );
};
