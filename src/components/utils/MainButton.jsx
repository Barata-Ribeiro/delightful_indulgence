import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/utils/MainButton.module.css';

const MainButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MainButton;
