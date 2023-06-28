import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/header.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import MainButton from './utils/MainButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          to='/'
          className={styles.logo}
          aria-label='Delightful Indulgence - Home'
        >
          <Logo />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <HashLink smooth to='/#menu'>
              Menu
            </HashLink>
          </li>
          <li>
            <HashLink smooth to='/#team'>
              Team
            </HashLink>
          </li>
          <li>
            <Link to='/story'>Story</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <Link to='/order'>
          <MainButton text='Order Ahead' />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
