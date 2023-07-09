import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Logo } from '/src/assets/footerLogo.svg';
import { ReactComponent as Facebook } from '/src/assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '/src/assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '/src/assets/icons/twitter.svg';
import { ReactComponent as Mail } from '/src/assets/icons/mail.svg';
import { ReactComponent as Phone } from '/src/assets/icons/phone_android.svg';
import styles from '../styles/components/footer.module.css';

const socialMediaLinks = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook />,
    url: 'https://www.facebook.com/',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: <Twitter />,
    url: 'https://www.twitter.com/',
  },
];

const siteLinks = [
  { id: 'home', name: 'Home', url: '/', isHashLink: false },
  { id: 'menu', name: 'Menu', url: '/#menu', isHashLink: true },
  { id: 'team', name: 'Team', url: '/#team', isHashLink: true },
  { id: 'story', name: 'Story', url: '/story', isHashLink: false },
  { id: 'contact', name: 'Contact', url: '/contact', isHashLink: false },
  {
    id: 'privacyPolicy',
    name: 'Privacy Policy',
    url: '/privacypolicy',
    isHashLink: false,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
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
            {socialMediaLinks.map((link) => (
              <li key={link.id}>
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
            <p>
              {currentYear} © Delightful Indulgence - Some rights reserved.
            </p>
          </div>
        </div>
        <div className={styles.thirdColumn}>
          <p className={styles.siteMapTitle}>Site Links</p>
          <ul className={styles.mapLinks}>
            {siteLinks.map((link) => (
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
