import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import styles from '../../styles/utils/TextArea.module.css';

const Input = ({
  rows,
  cols,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        <textarea
          className={styles.textarea}
          name={name}
          id={name}
          rows={rows}
          cols={cols}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          spellCheck='true'
          required
        ></textarea>
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
