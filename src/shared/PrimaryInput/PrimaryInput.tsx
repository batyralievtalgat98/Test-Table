import React, { FC } from 'react';
import styles from './PrimaryInput.module.scss';

interface PrimaryInputProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string
}

export const PrimaryInput: FC<PrimaryInputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  name=''
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        name={name}
      />
    </div>
  );
};