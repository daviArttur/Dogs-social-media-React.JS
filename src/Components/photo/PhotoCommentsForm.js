import React from 'react';
import styles from './PhotoCommentsForm.module.scss';
import useFetch from '../../Hooks/useFecth';
import { ReactComponent as Send } from '../../Assets/enviar.svg';
import { COMMENT_POST } from '../../api';

const PhotoCommentsForm = ({ photoAndComment, token, setCommentReload }) => {
  const [comment, setComment] = React.useState('');
  const { request } = useFetch();

  function handleChange({ target }) {
    setComment(target.value);
  }

  async function handleClick() {
    const { url, options } = COMMENT_POST(
      photoAndComment.photo.id,
      { comment },
      token,
    );
    const { response, json } = await request(url, options);
    console.log(json);
    if (response.ok) {
      setCommentReload((lastComments) => [...lastComments, json]);
    }
  }

  return (
    <form className={styles.container}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        className={styles.textarea}
        style={{ resize: 'none' }}
        onChange={handleChange}
        value={comment}
      ></textarea>

      <button type="button" className={styles.button} onClick={handleClick}>
        <Send />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
