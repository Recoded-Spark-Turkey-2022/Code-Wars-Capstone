import { useDispatch } from 'react-redux';
import {
 
  loginUserWithFacebook,
  loginUserWithGoogle,
} from '../../features/users/usersSlice';
import facebookicon from './Images/facebook.svg';
import googleicon from './Images/google.svg';

function LoginwithGoogle() {
  const dispatch = useDispatch();


  return (
    <>
      <div className="absolute flex items-center pl-20">
        <div className="border-t-2 w-40"> </div>
        <span className="mx-4 border rounded-full px-2 text-center border-2">
          or
        </span>
        <div className="border-t-2 w-40"> </div>
      </div>
      <div className="flex w-16 gap-4 translate-x-60  p t-10 ">
        <button
          type="button"
          style={{ height: 32, width: 32 }}
          onClick={(userDat) => {
            console.log(userDat);
            dispatch(
              loginUserWithGoogle({ id: userDat.id, email: userDat.email })
            );
          }}
        >
          <img src={googleicon} alt="Google Icon" />{' '}
        </button>

        <button
          type="button"
          style={{ height: 32, width: 32 }}
          onClick={(userDat) => {
            console.log(userDat);
            dispatch(
              loginUserWithFacebook({ id: userDat.id, email: userDat.email })
            );
          }}
        >
          {' '}
          <img src={facebookicon} alt="facebookicon" />{' '}
        </button>
      </div>
    </>
  );
}
export default LoginwithGoogle;
