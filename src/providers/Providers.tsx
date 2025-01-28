'use client';
import Modal from '@/components/Modal/Modal';
import RainEffect from '@/components/RainEffect/RainEffect';
import React, { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <RainEffect />
      {children}
      <Modal />
    </>
  );
};
