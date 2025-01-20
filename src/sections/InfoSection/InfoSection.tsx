import React, { FC } from 'react';
import styles from './InfoSection.module.scss';
import { SwiperInfo } from '@/components/SwiperInfo/SwiperInfo';


interface IInfoSection {
  data: any;
}

export const InfoSection: FC<IInfoSection> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          <SwiperInfo data={data} />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>{data.info.title}</h1>
          <p className={styles.description}>{data.info.description}</p>
        </div>
      </div>
    </section>
  );
};
