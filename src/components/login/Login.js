import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Alert } from '@mui/material';
import LoginwithGoogle from './loginwithGoogle';
import LoginForm from './loginForm';
import Sofa from './Images/Towperson.svg';

function Login() {
  const { t } = useTranslation();
  const [errorshow, setErrorshow] = useState(false);
  const error = useSelector((state) => state.users.error);

  return (
    <div>
      {errorshow && error && <Alert severity="error">{error} </Alert>}
      <div className="mb-10  ">
        <p className=" ml-10 text-3xl lg:text-5xl mt-7 mb-4 lg:ml-20 ">{t('Login')}</p>
        <div className="flex flex-col items-center lg:flex  lg:flex-row lg:justify-start lg:items-center ">
          <div className="flex-1 	">
            <LoginForm setErrorshow={setErrorshow} error={error} />{' '}
            <LoginwithGoogle />
          </div>
          <div className=" flex-1  ">
            {' '}
            <img src={Sofa} alt="SOFA" className="w-9/12 ml-10 lg:ml-0 mt-8 lg:mt-0" />{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
