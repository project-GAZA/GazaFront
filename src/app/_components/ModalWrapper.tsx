import React, { useEffect } from 'react';
import styles from './index.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalProps> = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return <div className={styles.modalWrapper}>{children}</div>;
};

export default ModalWrapper;
