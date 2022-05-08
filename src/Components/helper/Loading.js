import React from 'react';

import styles from './Loading.module.scss';

import { ReactComponent as LoadingIcon } from '../../Assets/carregando.svg';

const Loading = ({ loading }) => {

  console.log(loading)
  return (
    <>
      
        <section styles={styles.container}>
          <div className={styles.area}>
            <img src={LoadingIcon} alt="" className={styles.img} />
          </div>
        </section>
      
    </>
  );
};

export default Loading;
