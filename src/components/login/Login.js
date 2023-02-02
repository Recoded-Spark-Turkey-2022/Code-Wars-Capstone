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
  const error = useSelector((state)=> state.users.error)



  return (
    <div> 
      
      {errorshow  && <Alert severity= "error">{error} </Alert> }
    <div className="mb-10 md:mx-auto">
      <p className="text-5xl mt-7 lg:ml-20 ">{t('Login')}</p>
      <div className="lg:flex  lg:flex-rowjustify-start items-center">
        <div className="flex-1 	">
          <LoginForm  setErrorshow={setErrorshow} error={error}/> <LoginwithGoogle />
        </div>
        <div className=" flex-1  ">
          {' '}
          <img src={Sofa} alt="SOFA" className="w-9/12" />{' '}
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default Login;
