import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.scss'

const Error = ({ error, children }) => {
  if (!error) return null
  return <span className={styles.error}>{ children }</span>
};

Error.propTypes = {
  children: PropTypes.string,
  error: PropTypes.string,
};

export default Error;
