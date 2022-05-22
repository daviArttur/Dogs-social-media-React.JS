import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import stylesGlobal from '../../App.module.scss';
import NotFound from '../helper/NotFound';
import { UserContext } from '../../UserContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className={stylesGlobal.container}>
      {data && (
        <>
          <UserHeader />
          <Routes>
            <Route path="/feed" element={<Feed user={data.username} />} />
            <Route path="/post" element={<UserPhotoPost />} />
            <Route path="statistics" element={<UserStats user={data.username} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </section>
  );
};

export default User;
