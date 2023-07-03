import React from 'react';
import PropTypes from 'prop-types';

const updateMetaTag = (name, content, attr = 'name') => {
  let element = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (element) element.setAttribute('content', content);
  else {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const Head = ({ title, description }) => {
  const { href } = window.location;
  const ogImage =
    'https://raw.githubusercontent.com/Barata-Ribeiro/delightful_indulgence/main/public/og-picture.jpg';

  React.useEffect(() => {
    const siteTitle = `${title} | Delightful Indulgence`;
    document.title = siteTitle;

    updateMetaTag('description', description);

    // Open Graph / Facebook
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', href, 'property');
    updateMetaTag('og:image', ogImage, 'property');

    // Open Graph / Twitter
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:url', href, 'name');
  }, [title, description, href]);

  //   THIS HEAD COMPONENT DOES NOT RETURN ANYTHING!!!
  return null;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Head;
