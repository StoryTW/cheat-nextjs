'use client';
import React, { FC, useMemo, useState } from 'react';
import styles from './ProfilePage.module.scss';
import clsx from 'clsx';
import { useModalStore } from '@/store/useModalStore';
import { EditModal } from '@/components/ModalContent/EditModal/EditModal';
import IconSeparator from '@/assets/icons/separator.svg?react';
import { PromocodeModal } from '@/components/ModalContent/PromocodeModal/PromocodeModal';
import Image from 'next/image';

interface IProfilePage {
  data: any;
}

export const ProfilePage: FC<IProfilePage> = ({ data }) => {
  const openModal = useModalStore((state) => state.openModal);

  const [currentSubscription, setCurrentSubscription] = useState<string>(
    data?.subscription?.[0]?.id,
  );

  const handleChangeSubscription = (id: string) => {
    setCurrentSubscription(id);
  };

  const handleEdit = () => {
    openModal(<EditModal />);
  };

  const handlePromocode = () => {
    openModal(<PromocodeModal />);
  };

  const itemData = useMemo(() => {
    return data?.subscription.find((item) => item.id === currentSubscription);
  }, [currentSubscription]);

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

        <div className={clsx(styles.box, styles.info)}>
          <div>
            <div className={styles.infoTitle}>Сведения о подписке</div>
            <div className={styles.time}>
              <div className={styles.block}>
                <div className={styles.date}>{itemData.expired?.d}</div>
                <div className={styles.text}>Дней</div>
              </div>
              <div className={styles.separator}>
                <IconSeparator />
              </div>
              <div className={styles.block}>
                <div className={styles.date}>{itemData.expired?.h}</div>
                <div className={styles.text}>Часов</div>
              </div>
              <div className={styles.separator}>
                <IconSeparator />
              </div>
              <div className={styles.block}>
                <div className={styles.date}>{itemData.expired?.m}</div>
                <div className={styles.text}>Минут</div>
              </div>
            </div>

            <div className={styles.infoDescription}>Условия:</div>
          </div>

          <div className={styles.infoPrice}>Стоимость: {itemData.price}₽</div>
        </div>

        <div className={clsx(styles.box, styles.list)}>
          <div>
            <div className={styles.listTitle}>СТАТУС ПОДПИСКИ</div>
            <ul className={styles.listContent}>
              {data.subscription.map((item, index) => {
                return (
                  <li key={index} onClick={() => handleChangeSubscription(item.id)}>
                    <button
                      type='button'
                      tabIndex={-1}
                      className={clsx(styles.listItem, {
                        [styles.active]: item.id === currentSubscription,
                      })}
                    >
                      <Image src={item.icon} width={68} height={68} alt={item.name} />
                      <div className={styles.listItemContent}>
                        <div className={styles.listItemName}>{item.name}</div>
                        <div className={styles.listItemStatus}>{item.status}</div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.listBtn}>
            <button
              className={styles.btnPromo}
              onClick={handlePromocode}
              tabIndex={-1}
              type='button'
            >
              ВВЕСТИ ПРОМОКОД
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
