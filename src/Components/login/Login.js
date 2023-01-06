import { signInWithPopup } from 'firebase/auth';
import LoginForm from './loginForm';
import facebookicon from './Images/facebook.svg';
import googleicon from './Images/google.svg';
import { googleAuth, facebookAuth, auth } from '../../firebase-config';
import Sofa from './Images/Towperson.svg';

const handlegoogle = () => {
  signInWithPopup(auth, googleAuth)
    .then((resp) => {
      console.log(resp.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const handlefacebook = () => {
  signInWithPopup(auth, facebookAuth)
    .then((resp) => {
      console.log(resp.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};


function Login() {
  return (
    <div>
      <p className="text-5xl mt-7 ml-20  ">Login</p>
      <div className="flex justify-start items-center">
        <div className="flex-1 translate-x-20	">
          <LoginForm />{' '}
        </div>
        <div className=" flex-1  ">
          {' '}
          <img src={Sofa} alt="SOFA" className="w-9/12" />{' '}
        </div>
      </div>

      <div className="absolute flex items-center h-12 translate-x-20">
        <div className="border-t-2 w-40"> </div>
        <span className="mx-4 border rounded-full px-2 text-center border-2">
          or
        </span>
        <div className="border-t-2 w-40"> </div>
      </div>
      <div className="flex w-16 gap-4 translate-x-60 translate-y-10 ">
        <button
          type="button"
          style={{ height: 32, width: 32 }}
          onClick={handlegoogle}
        >
          <img src={googleicon} alt="Google Icon" />{' '}
        </button>

        <button
          type="button"
          style={{ height: 32, width: 32 }}
          onClick={handlefacebook}
        >
          {' '}
          <img src={facebookicon} alt="facebookicon" />{' '}
        </button>
      </div>
    </div>
  );
}
export default Login;
