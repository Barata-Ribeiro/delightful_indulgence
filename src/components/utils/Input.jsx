import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import styles from '../../styles/utils/Input.module.css';

const Input = ({ type, name, value, onChange, error, onBlur, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        <input
          className={styles.input}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required
        />
      </label>
      {error && (
        <p className={styles.error}>
          <RiErrorWarningFill size={20} className={styles.errorIcon} />
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
