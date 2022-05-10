import React from 'react';
import useFetch from '../../Hooks/useFecth';
import { PHOTOS_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.scss';

const FeedPhotos = ({ setPhotoSelect }) => {
  const [photos, setPhotos] = React.useState(null);
  const { loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getPhotos() {
      const { url, endpoint } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, endpoint);
      setPhotos(json);
    }
    getPhotos();
  }, [request]);

  return (
    <section className={styles.container}>
      {photos &&
        photos.map((item) => (
          <FeedPhotosItem
            key={item.id}
            className={styles.img}
            photo={item}
            setPhotoSelect={setPhotoSelect}
          />
        ))}

      <Loading loading={loading} />
      <Error error={error}>Um error aconteceu</Error>
    </section>
  );
};

export default FeedPhotos;
