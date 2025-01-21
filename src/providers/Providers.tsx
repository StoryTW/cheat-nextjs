'use client';
import Modal from '@/components/Modal/Modal';
import React, { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Modal />
    </>
  );
};
