import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import styles from '../../App.module.scss'

const Feed = () => {
  const [ photoSelect, setPhotoSelect ] = React.useState(null);

  return (  
    <section className={styles.container} style={{marginTop: '1rgitem'}}>
      {photoSelect && (
        <FeedModal photoSelect={photoSelect} setPhotoSelect={setPhotoSelect}/>
      )}
      <FeedPhotos setPhotoSelect={setPhotoSelect}/>
    </section>
  )
};

export default Feed;
