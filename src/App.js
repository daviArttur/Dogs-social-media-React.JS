import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/login/Login';
import User from './Components/user/User';
import Photo from './Components/photo/Photo'
import ProtectedAccess from './Components/helper/ProtectedAccess';
import { UserStore } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.module.scss';
import UserFeed from './Components/user/UserFeed';
import NotFound from './Components/helper/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <UserStore>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage/*" element={
              <ProtectedAccess>
                <User />
              </ProtectedAccess>
            } />
            <Route path="/user/:user" element={<UserFeed />} />
            <Route path="/photo/:id" element={<Photo />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStore>
      </BrowserRouter>
    </>
  );
}

export default App;
