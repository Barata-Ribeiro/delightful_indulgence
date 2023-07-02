import React from 'react';
import styles from '../../styles/utils/Loading.module.css';

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.spinner}></div>
    <p className={styles.loadingText}>Loading...</p>
  </div>
);

export default Loading;
