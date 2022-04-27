import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import LoginReset from './LoginReset';
import LoginLost from './LoginLost';
import styles from './Login.module.scss'
import Cadastry from './LoginCadastry';

const Login = () => {
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