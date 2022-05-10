import React from 'react';
import useFetch from '../../Hooks/useFecth';
import { PHOTO_GET } from '../../api';
import styles from './FeedModal.module.scss';
import Loading from '.././helper/Loading';
import { ReactComponent as Views } from '../../Assets/visualizacao-black.svg';
import { Link } from 'react-router-dom';
import PhotoComment from '../photo/PhotoComment';

const FeedModal = ({ photoSelect, setPhotoSelect }) => {
  const { data, loading, request } = useFetch();

  React.useEffect(() => {
    async function callPhoto() {
      const { url, options } = PHOTO_GET(photoSelect);
      await request(url, options);
    }
    callPhoto();
  }, [request, photoSelect]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setPhotoSelect(null);
  }

  return (
    <>
      {data && (
        <div className={styles.container} onClick={handleOutsideClick}>
          <section className={styles.containerData}>
            <img src={data.photo.src} alt="" className={styles.img} />

            <div className={styles.containerFlex}>
              <section className={styles.containerInfo}>
                <div className={styles.userAndViews}>
                  <div className={styles.authorAndViews}>
                    <Link to="/">@{data.photo.author}</Link>
                    <p>
                      <Views className={styles.views} />
                      {data.photo.acessos}
                    </p>
                  </div>

                  <div className={styles.nameDog}>
                    <h2 className={styles.title}> {data.photo.title} </h2>
                  </div>

                  <ul className={styles.bio}>
                    <li>{data.photo.peso} kg</li>
                    <li>{data.photo.idade} anos</li>
                  </ul>

                  <section className={styles.containerComment}>
                    <ul>
                      <PhotoComment data={data} />
                    </ul>
                  </section>
                  
                </div>
              </section>
            </div>
          </section>
        </div>
      )}
      <Loading loading={loading} />
    </>
  );
};

export default FeedModal;
