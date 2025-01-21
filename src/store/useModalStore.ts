import { ReactNode } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalStoreType = {
  isOpen: boolean;
  content: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  setContent: (content: ReactNode) => void;
};

export const useModalStore = create<ModalStoreType>()(
  immer((set, get) => ({
    isOpen: false,
    content: null,
    options: null,
    openModal: (content) =>
      set((state) => {
        state.isOpen = true;
        state.content = content;
      }),
    closeModal: () => {
      set((state) => {
        state.isOpen = false;
        state.content = null;
      });
    },
    setContent: (content) =>
      set((state) => {
        state.content = content;
      }),
  })),
);
