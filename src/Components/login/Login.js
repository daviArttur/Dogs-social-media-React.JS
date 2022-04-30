import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './LoginForm';
import LoginReset from './LoginReset';
import LoginLost from './LoginLost';
import styles from './Login.module.scss'
import Cadastry from './LoginCadastry';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/mypage" />
  
  return (
    <section className={styles.login}>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='cadastry' element={<Cadastry />} />
        <Route path='lost' element={<LoginLost />} />
        <Route path='reset' element={<LoginReset />} />
      </Routes>
    </section>
  )
}

export default Login