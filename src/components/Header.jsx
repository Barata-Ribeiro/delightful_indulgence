import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/header.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import MainButton from './utils/MainButton';

const navLinks = [
  { id: 'home', name: 'Home', url: '/', isHashLink: false },
  { id: 'menu', name: 'Menu', url: '/#menu', isHashLink: true },
  { id: 'team', name: 'Team', url: '/#team', isHashLink: true },
  { id: 'story', name: 'Story', url: '/story', isHashLink: false },
  { id: 'contact', name: 'Contact', url: '/contact', isHashLink: false },
];

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
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.isHashLink ? (
                <HashLink smooth to={link.url}>
                  {link.name}
                </HashLink>
              ) : (
                <Link to={link.url}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <Link to='/order'>
          <MainButton text='Order Ahead' />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
