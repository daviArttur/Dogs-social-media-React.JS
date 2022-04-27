import React from 'react';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styles from './Header.module.scss';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav + ' container'}>
        <Link to="/">
          <Dogs />
        </Link>
        
        <section className={styles.navLinks}>
        {data ? (
            <>
              <Link to="account"> Minha conta </Link>
              <button onClick={userLogout}>Sair</button>
            </>
            ) : (
              <Link to="/login"> Login / Criar </Link>
            )}
            <Link to={data ? "/acount" : "/login"} className={styles.login}></Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
