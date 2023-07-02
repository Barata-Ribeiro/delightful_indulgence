import React from 'react';
import styles from '../styles/components/menuItem.module.css';
import Image from './utils/Image';
import { Link } from 'react-router-dom';

const MenuItem = ({ dessert, dessertSrc, dessertAlt }) => {
  return (
    <Link to={`/menu/${dessert.id}`} className={styles.dessertPhoto}>
      <Image src={dessertSrc} alt={dessertAlt} />
      <div className={styles.dessertContent}>
        <h2 className={styles.dessertName}>
          <span className={styles.special}>{dessert.name[0]}</span>
          <br />
          {dessert.name[1]}
        </h2>
        <p className={styles.dessertDescription}>{dessert.description}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
