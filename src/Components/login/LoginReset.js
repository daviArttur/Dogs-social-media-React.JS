import React from 'react';
import Input from '../tagComponents/Input';
import Button from '../tagComponents/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFecth';
import { PASSWORD_RESET } from '../../api';
import Error from '../helper/Error';
import { useNavigate } from 'react-router-dom';
import Label from '../tagComponents/Label';
import styles from '../../App.module.scss';

const LoginReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('default');
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response, json } = await request(url, options);
      console.log(response, json);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Resete a Senha</h1>
      <form>
        <Label forType={'password'}>Nova Senha</Label>
        <Input type="password" name="password" id="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button paramOnClick={handleSubmit}>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};
export default LoginReset;
