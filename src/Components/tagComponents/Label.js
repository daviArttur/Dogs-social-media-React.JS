import React from 'react';
import styles from'./Label.module.scss'

const Label = ({ type, children}) => {
  return (
    <label className={styles.label} htmlFor={type}>{ children }</label>
  )
}

export default Label