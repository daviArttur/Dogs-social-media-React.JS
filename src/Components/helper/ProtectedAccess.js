import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedAccess = ({ children }) => {
  const { login } = React.useContext(UserContext);
  
  if (login === false) {
    return <Navigate to="/login" />
  } else {
    return children
  }
};

export default ProtectedAccess;
