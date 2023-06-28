import React from 'react';
import styles from '../../styles/utils/MainButton.module.css';

const MainButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default MainButton;
