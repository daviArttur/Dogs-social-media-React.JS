import React from 'react';
import useFetch from '../../Hooks/useFecth';
import { PHOTO_DELETE } from '../../api';
import { UserContext } from '../../UserContext';
import styles from './PhotoDelete.module.scss';
import { Link, useParams } from 'react-router-dom';


const PhotoDelete = ({ id, author }) => {
  const { data } = React.useContext(UserContext);
  const { request } = useFetch();

  if (id && author) {
    const verify = author === data.username;
    const token = window.localStorage.getItem('token');
    const navigateToPerfil = `https://dogs.origamid.dev/perfil/${author}`
    async function handleClick() {
      const confirmUser = window.confirm(
        'Tem certeza que deseja apagar essa foto?',
      );

      if (confirmUser) {
        const { url, options } = PHOTO_DELETE(id, token);
        const { response } = await request(url, options);
        if (response.ok) {
          window.location.reload();
        }
      }
    }

    return (
      verify && data ? (
        <button type="button" onClick={handleClick} className={styles.button}>
          Deletar
        </button>
      ) : (
        <Link to={`/user/${author}`} className={styles.link} style={{color: 'rgb(51,51,51)'}} href={navigateToPerfil} >@{author}</Link>
      )
    );
  }
};

export default PhotoDelete;
