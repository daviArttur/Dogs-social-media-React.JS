import React from 'react';
import Error from '../helper/Error';
import Input from '../tagComponents/Input';
import Label from '../tagComponents/Label';
import Button from '../tagComponents/Button';
import styles from '../../App.module.scss';
import useForm from '../../Hooks/useForm';
import useFecth from '../../Hooks/useFecth';
import { useNavigate } from 'react-router-dom';
import { USER_POST } from '../../api';

const Cadastry = () => {
  const navigate = useNavigate();
  const username = useForm('default');
  const email = useForm('email');
  const password = useForm('default');

  const { loading, error, request } = useFecth();

  const values = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  async function handleSubmit() {
    const types = username.validate() && email.validate() && password.validate();
    console.log(values);
    if (types) {
      const { url, options } = USER_POST(values);
      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <div style={{ maxWidth: '480px' }}>
      <section className={styles.form}>
        <h1 className={styles.title}>Cadastre-se</h1>

        <form className={styles.animeLeft}>
          
          <Label type="text">Usuário</Label>
          <Input type="text" id="text" {...username} />

          <Label type="email">Email</Label>
          <Input type="email" id="email" {...email} />

          <Label type="password">Senha</Label>
          <Input type="password" id="password" {...password} />

          <Error error={error}>Dados Inválidos</Error>

          <Button
            style={{ marginTop: '1rem' }}
            paramOnClick={handleSubmit}
            loading={loading}
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Cadastry;
