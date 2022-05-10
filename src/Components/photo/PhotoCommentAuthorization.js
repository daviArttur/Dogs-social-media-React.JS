import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';


const PhotoCommentAuthorization = ({ data, setCommentReload }) => {
  const { login } = React.useContext(UserContext);
  const token = window.localStorage.getItem('token');
  return login && (
  <PhotoCommentsForm 
    photoAndComment={data} 
    token={token}
    setCommentReload={setCommentReload}
  />);
};

export default PhotoCommentAuthorization;
