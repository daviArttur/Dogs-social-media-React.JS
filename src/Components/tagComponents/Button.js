import React from 'react';
import styles from'./Button.module.scss';

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

export default Button