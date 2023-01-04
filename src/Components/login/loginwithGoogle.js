import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import facebookicon from './Images/facebook.svg';
import googleicon from './Images/google.svg';

function LoginwithGoogle() {
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();

  const handlegoogle = () => {
    signInWithPopup(auth, googleprovider)
      .then((resp) => {
        console.log(resp.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handlefacebook = () => {
    signInWithPopup(auth, facebookprovider)
      .then((resp) => {
        console.log(resp.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
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
    </>
  );
}
export default LoginwithGoogle;
