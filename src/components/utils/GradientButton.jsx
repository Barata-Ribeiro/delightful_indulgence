import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/utils/GradientButton.module.css';

const GradientButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

GradientButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GradientButton;
