import { useTranslation } from 'react-i18next';
import LoginwithGoogle from './loginwithGoogle';
import LoginForm from './loginForm';
import Sofa from './Images/Towperson.svg';

function Login() {
  const { t } = useTranslation();

  return (
    <div className="mb-10 md:mx-auto">
      <p className="text-5xl mt-7 lg:ml-20 ">{t('Login')}</p>
      <div className="lg:flex  lg:flex-rowjustify-start items-center">
        <div className="flex-1 	">
          <LoginForm /> <LoginwithGoogle />
        </div>
        <div className=" flex-1  ">
          {' '}
          <img src={Sofa} alt="SOFA" className="w-9/12" />{' '}
        </div>
      </div>
    </div>
  );
}
export default Login;
