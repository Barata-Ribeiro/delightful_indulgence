import React from 'react';
import styles from '../styles/NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className={`${styles.notFound} container`}>
      <h1 className={styles.title}>
        <span>404</span> Error
      </h1>
      <p className={styles.paragraph}>
        We can&apos;t find the page you&apos;re looking for.
      </p>
      <Link className={styles.button} to='/'>
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
