import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/components/header.module.css';
import { ReactComponent as Logo } from '/src/assets/logo.svg';
import MainButton from './utils/MainButton';

const navLinks = [
  { id: 'home', name: 'Home', url: '/', isHashLink: false },
  { id: 'menu', name: 'Menu', url: '/#menu', isHashLink: true },
  { id: 'team', name: 'Team', url: '/#team', isHashLink: true },
  { id: 'story', name: 'Story', url: '/story', isHashLink: false },
  { id: 'contact', name: 'Contact', url: '/contact', isHashLink: false },
];

const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (!location.hash) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [location]);

  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

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
        <button
          onClick={handleToggle}
          className={styles.hamburger}
          aria-expanded={isOpen}
        >
          <svg
            fill='var(--keppel-950)'
            stroke='var(--keppel-950)'
            className={`${styles.hamburgerSVG} ${
              isOpen ? styles.open : styles.closed
            }`}
            viewBox='0 0 100 100'
            width='50'
          >
            <line
              className={`${styles.line} ${styles.top}`}
              x1='90'
              x2='10'
              y1='40'
              y2='40'
              strokeWidth='10'
              strokeLinecap='round'
              strokeDasharray='80'
              strokeDashoffset='0'
            ></line>
            <line
              className={`${styles.line} ${styles.bottom}`}
              x1='10'
              x2='90'
              y1='60'
              y2='60'
              strokeWidth='10'
              strokeLinecap='round'
              strokeDasharray='80'
              strokeDashoffset='0'
            ></line>
          </svg>
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.isHashLink ? (
                <HashLink smooth to={link.url} onClick={handleToggle}>
                  {link.name}
                </HashLink>
              ) : (
                <Link to={link.url} onClick={handleToggle}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Link to='/order' className={styles.orderBtn}>
          <MainButton text='Order Ahead' />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
