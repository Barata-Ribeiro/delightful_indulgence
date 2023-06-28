import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Logo } from '../assets/footerLogo.svg';
import { ReactComponent as Facebook } from '../assets/images/icons/facebook.svg';
import { ReactComponent as Instagram } from '../assets/images/icons/instagram.svg';
import { ReactComponent as Twitter } from '../assets/images/icons/twitter.svg';
import { ReactComponent as Mail } from '../assets/images/icons/mail.svg';
import { ReactComponent as Phone } from '../assets/images/icons/phone_android.svg';
import styles from '../styles/footer.module.css';

const socialMediaLinks = [
  { name: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/' },
  { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/' },
  { name: 'Twitter', icon: <Twitter />, url: 'https://www.twitter.com/' },
];

const siteLinks = [
  { name: 'Home', url: '/', isHashLink: false },
  { name: 'Menu', url: '/#menu', isHashLink: true },
  { name: 'Team', url: '/#team', isHashLink: true },
  { name: 'Story', url: '/story', isHashLink: false },
  { name: 'Contact', url: '/contact', isHashLink: false },
  { name: 'Privacy Policy', url: '/privacypolicy', isHashLink: false },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.firstColumn}>
          <Link
            to='/'
            className={styles.logo}
            aria-label='Delightful Indulgence - Home'
          >
            <Logo />
          </Link>
          <p>
            This website is fictitious and none of the information presented
            here is real.
          </p>
          <ul className={styles.socialIcons}>
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a
                  className={styles.socialIcon}
                  href={link.url}
                  rel='noreferrer noopener'
                  target='_blank'
                  title={`Our ${link.name} Page`}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.contactInfo}>
            <div className={styles.contactText}>
              <h2>Get in Touch</h2>
              <p>
                For any feedback or question, don’t hesitate to get in touch.
              </p>
            </div>
            <div className={styles.info}>
              <a
                href='mailto:contact@delightfulindulgence.com'
                rel='nofollow noreferrer'
                target='_blank'
                title='Contact Us'
                className={styles.contactLinks}
              >
                <Mail /> contact@delightfulindulgence.com
              </a>
              <a
                href='tel:+15056556192'
                title='Call Us'
                className={styles.contactLinks}
              >
                <Phone /> +1 505-655-6192
              </a>
            </div>
          </div>
          <div className={styles.copy}>
            <p>{`Powered by Barata </> Ribeiro`}</p>
            <p>{currentYear} © Delightful Indulgence - Some rights reserved.</p>
          </div>
        </div>
        <div className={styles.thirdColumn}>
          <p className={styles.siteMapTitle}>Site Links</p>
          <ul className={styles.mapLinks}>
            {siteLinks.map((link, index) => (
              <li key={index}>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
