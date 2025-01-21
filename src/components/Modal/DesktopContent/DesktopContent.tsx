import { Close } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import IconClose from '@/assets/icons/icon-close.svg?react';
import styles from './DesktopContent.module.scss';

const animateModal = {
  open: {
    opacity: 1,
    scale: 1,
  },
  close: {
    opacity: 0,
    scale: 0.92,
  },
};

export const DesktopContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      variants={animateModal}
      initial='close'
      animate='open'
      exit='close'
      transition={{
        duration: 0.15,
      }}
      className={styles.contentWrapper}
    >
      <div className={styles.content}>
        <Close aria-label='close' asChild>
          <div className={styles.iconClose}>
            <IconClose />
          </div>
        </Close>
        {children}
      </div>
    </motion.div>
  );
};
