import { useNavigate } from 'react-router-dom';

const NavigateLogin = () => {
  const navigate = useNavigate();

  return navigate('/login');
};

export default NavigateLogin;
