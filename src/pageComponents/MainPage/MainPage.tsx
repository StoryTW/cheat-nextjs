'use client';
import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import { FaqSection } from '@/sections/FaqSection/FaqSection';
import { InfoSection } from '@/sections/InfoSection/InfoSection';
import { TariffsSection } from '@/sections/TariffsSection/TariffsSection';

interface IMainPage {
  gameData: any;
}

export const MainPage: FC<IMainPage> = ({ gameData }) => {
  return (
    <main>
      <InfoSection data={gameData} />
      <TariffsSection data={gameData} />
      <FaqSection />
    </main>
  );
};
