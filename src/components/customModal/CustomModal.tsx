import { FC } from "react";
import styles from './CustomModal.module.scss';

interface CustomModalProps {
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const CustomModal: FC<CustomModalProps> = ({ onClose, title, children }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          &times;
        </button>
        {title && <h2>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};