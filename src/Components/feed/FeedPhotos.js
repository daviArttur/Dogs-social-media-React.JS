import React from 'react';
import useFetch from '../../Hooks/useFecth';
import { PHOTOS_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.scss';

const FeedPhotos = ({ setPhotoSelect, page, total, user, setInfinite }) => {
  const [ photos, setPhotos ] = React.useState(null);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getPhotos() {
      const { url, endpoint } = PHOTOS_GET({
        page: page,
        total: total,
        user: user,
      });
      const { response, json } = await request(url, endpoint);

      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
      setPhotos(json);
    }
    getPhotos();
  }, [request, page, total, user, setInfinite]);


  if (loading) return <Loading />
  if (error) return <Error />
  if (data) return (
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

      <Error error={error}>Um error aconteceu</Error>
    </section>
  );
};

export default FeedPhotos;
