import React from 'react';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styles from './Header.module.scss';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav + ' container'}>
        <Link to="/">
          <Dogs />
        </Link>

        <section className={styles.navLinks}>
          {data ? (
            <>
              <p>{ data ? data.nome : 'Login / Criar'}</p>
            </>
          ) : (
            <Link to="/login"> Login / Criar </Link>
          )}
          <Link
            to={data ? '/mypage' : '/login'}
            className={styles.login}
          ></Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
