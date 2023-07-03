import React from 'react';
import styles from '../styles/NotFound.module.css';
import { Link } from 'react-router-dom';
import GradientButton from '../components/utils/GradientButton';
import Head from '../components/utils/Head';

const NotFound = () => {
  return (
    <section className={`${styles.notFound} container`}>
      <Head
        title='NOT FOUND'
        description='This page does not exist, go back to Home or any other page.'
      />
      <h1 className={styles.title}>
        <span>404</span> Error
      </h1>
      <p className={styles.paragraph}>
        We can&apos;t find the page you&apos;re looking for.
      </p>
      <Link to='/'>
        <GradientButton text='Back to Home' />
      </Link>
    </section>
  );
};

export default NotFound;
