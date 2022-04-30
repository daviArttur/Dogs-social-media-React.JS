import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/login/Login';
import User from './Components/user/User';
import ProtectedAccess from './Components/permission/ProtectedAccess';
import { UserStore } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.module.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <UserStore>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/mypage/*" element={
              <ProtectedAccess>
                <User />
              </ProtectedAccess>
            } />
          </Routes>
          <Footer />
        </UserStore>
      </BrowserRouter>
    </>
  );
}

export default App;
