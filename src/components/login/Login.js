import LoginwithGoogle from './loginwithGoogle';
import LoginForm from './loginForm';
import Sofa from './Images/Towperson.svg';

function Login() {
  return (
    <div className="mb-10">
      <p className="text-5xl mt-7 ml-20 ">Login</p>
      <div className="flex justify-start items-center">
        <div className="flex-1 translate-x-20	">
          <LoginForm />{' '}
        </div>
        <div className=" flex-1  ">
          {' '}
          <img src={Sofa} alt="SOFA" className="w-9/12" />{' '}
        </div>
      </div>

      <LoginwithGoogle />
    </div>
  );
}
export default Login;