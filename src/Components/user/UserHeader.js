import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.scss';
import stylesGlobal from '../../App.module.scss';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname)
    const {pathname} = location;

    switch(pathname) {
      case '/mypage/statistics':
        setTitle('Estatísticas');
        break;
      case '/mypage/post': 
        setTitle('Postar');
        break;
      default:
        setTitle('Minha conta')
    }
  
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className={stylesGlobal.title}>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
