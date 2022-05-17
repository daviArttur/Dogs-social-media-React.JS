import React from 'react';
import stylesGlobal from '../../App.module.scss';
import Input from '../tagComponents/Input';
import Button from '../tagComponents/Button';
import Label from '../tagComponents/Label';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFecth';
import { PASSWORD_LOST } from '../../api';
const LoginLost = () => {
  const login = useForm('default');

  const { data, loading, request } = useFetch();

  const replaceURL = window.location.href.replace('lost', 'reset');

  async function sendEmail() {
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: replaceURL,
    });
    await request(url, options);
  }

  const verify = login.value === '';
  
  return (
    <section style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', marginBottom: '10vh', width: '30rem'}}>
      <h1 className={stylesGlobal.title}>Perdeu a senha?</h1>
      {data ? (
        <p style={{color: 'green'}}> {data}</p>
      ) : (
        <form>
        <Label>Email / Usuário</Label>
        <Input {...login} />
        
        <Button paramOnClick={sendEmail} loading={loading} disabled={verify}>
          Enviar Email
        </Button>
      </form>
      )}
      
    </section>
  );
};

export default LoginLost;
