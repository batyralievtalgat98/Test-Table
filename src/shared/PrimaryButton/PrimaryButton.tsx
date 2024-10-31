import React, { FC } from 'react';
import styles from './PrimatyButton.module.scss'
type PrimaryButtonProps = {
    children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const PrimaryButton:FC<PrimaryButtonProps> = ({
  children,
  onClick,
  style,
  className = '',
  type='button'
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.primaryButton} ${className}`}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};