import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST, USER_POST } from './api';
import useFecth from './Hooks/useFecth';

export const UserContext = React.createContext();

export const UserStore = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();

  const callUser = React.useCallback(async function (token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    navigate('/mypage');
  }, [navigate]);

  const verifyToken = React.useCallback(async function () {
    const token = window.localStorage.getItem('token');
    if (token) {
      const { url, options } = TOKEN_VALIDATE_POST(token);
      const response = await fetch(url, options);
      try {
        setError(null);
        setLoading(true);
        if (!response.ok) throw new Error('Token inválido');
        return true;
      } catch (err) {
        setError('Token inválido');
        userLogout();
        return false;
      } finally {
        setLoading(false);
      }
    }
  }, []);

  function userLogout() {
    setData(null);
    setError(null);
    setLogin(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <UserContext.Provider
      value={{
        userLogout,
        callUser,
        verifyToken,
        setData,
        data,
        login,
        setLogin,
        setError,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
