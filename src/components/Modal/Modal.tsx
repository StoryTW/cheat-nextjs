'use client'
import { Content, Overlay, Portal, Root, Title, Description } from '@radix-ui/react-dialog';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import styles from './Modal.module.scss';
import { DesktopContent } from './DesktopContent/DesktopContent';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useModalStore } from '@/store/useModalStore';
import { useShallow } from 'zustand/shallow';

export default function Modal() {
  const { isOpen, closeModal, content } = useModalStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      closeModal: state.closeModal,
      content: state.content,
    })),
  );

  return (
    <Root open={isOpen} onOpenChange={closeModal}>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <Portal forceMount>
            <Overlay className={styles.overlay}>
              <Content forceMount>
                <VisuallyHidden>
                  <Title />
                  <Description />
                </VisuallyHidden>
                <DesktopContent>{content}</DesktopContent>
              </Content>
            </Overlay>
          </Portal>
        )}
      </AnimatePresence>
    </Root>
  );
}
