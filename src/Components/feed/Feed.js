import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import styles from '../../App.module.scss';
import { UserContext } from '../../UserContext';

const Feed = () => {

  const  { data } = React.useContext(UserContext);
  const [photoSelect, setPhotoSelect] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function handleScroll() {
      if (infinite) {
        const height =
          document.body.offsetHeight - document.documentElement.clientHeight;
        const scroll = window.scrollY;
        if (scroll > height * 0.85 && !wait) {
          wait = true;
          setPages(() => [...pages, pages.length + 1]);
          setTimeout(() => (wait = false), 500);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [pages, infinite]);

  if (data) return (
    <section className={styles.container} style={{ marginTop: '1rem' }}>
      {photoSelect && (
        <FeedModal photoSelect={photoSelect} setPhotoSelect={setPhotoSelect} />
      )}

      {pages.map((index) => {
        return (
          <FeedPhotos
            verifyLoading={pages}
            key={index}
            setPhotoSelect={setPhotoSelect}
            page={index}
            setInfinite={setInfinite}
            total={6}
            user={data.username}
          />
        );
      })}
    </section>
  );
};

export default Feed;
