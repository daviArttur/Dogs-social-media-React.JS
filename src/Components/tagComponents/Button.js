import React from 'react';
import styles from'./Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ paramOnClick, loading, children, style }) => {

  return (
    <button
      disabled={loading && true}
      className={styles.button}
      type='button'
      onClick={paramOnClick}
      style={style}
    > {children} </button>
  )
}

Button.propTypes = {
  paramOnClick: PropTypes.func,
  loading: PropTypes.bool
}

export default Button