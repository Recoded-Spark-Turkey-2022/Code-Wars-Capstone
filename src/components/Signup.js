import React, { useState, useEffect    } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  signupUser,
  loginUserWithFacebook,
  loginUserWithGoogle,
} from '../features/users/usersSlice';
import facebookicon from './login/Images/facebook.svg';
import googleicon from './login/Images/google.svg';

const SignupForm = () => {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.users);
  const {signedup} = useSelector((state) => state.users);

   const [enteredInput, setEnteredInput] = useState(false);
  const [alertitem, showalertitm] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
    const navigate = useNavigate();
  

  const onSubmitform = async(userData) => {
    console.log(userData);

    if (userData.email !== userData.emailConfirmation) {
      showalertitm(true);
      setError('Your Email should  matche');
    } else if (userData.password !== userData.passwordConfirmation) {
      showalertitm(true);
      setError('Your Password should  matche');
    }

    setEnteredInput(true);

     dispatch(
      signupUser({
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthdayDay: userData.birthdayDay,
        birthdayMonth: userData.birthdayMonth,
        birthdayYear: userData.birthdayYear,
      })
    );
   
    
  };

  useEffect(() => {
    if (signedup === true) {
      navigate("/signup-thanks");
    }
  }, [signedup]);

  return (
    <div>
      {alertitem && (
        <Alert severity="error" className="">
          {error}
        </Alert>
        
      )}
       {enteredInput && <Alert severity= "error" className=''>{userInfo.error}</Alert>}

      <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20 mb-32">
        <div className="flex flex-col">
          <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
            {t('SIGNUP NOW')}
          </h2>
          <form
            className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]"
            onSubmit={handleSubmit(onSubmitform)}
          >
            <div className="flex gap-x-7">
              <input
                {...register('firstName', { pattern: /^[A-Za-z]+$/i })}
                type="text"
                placeholder={t('First Name')}
                className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.firstName ? 'true' : 'false'}
                required
              />
              <input
                {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                type="text"
                placeholder={t('Last Name')}
                className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
            </div>
            {errors.firstName?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                The first Name must not contain numbers
              </span>
            )}
            {errors.lastName?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                The Last Name must not contain numbers
              </span>
            )}

            <input
              {...register('email', {
                pattern:
                  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="text"
              placeholder={t('Your Email')}
              className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              aria-invalid={errors.lastName ? 'true' : 'false'}
              required
            />
            {errors.email?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                please enter a valid email address{' '}
              </span>
            )}

            <input
              {...register('emailConfirmation', {
                pattern:
                  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="text"
              placeholder={t('Confirm email')}
              className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              required
            />
            <div className="flex gap-x-7">
              <input
                {...register('password', {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                })}
                type="password"
                placeholder={t('Password')}
                className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />

              <input
                {...register('passwordConfirmation', {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                })}
                type="password"
                placeholder={t('Confirm Password')}
                className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                required
              />
            </div>
            {errors.password?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                password must be eight characters including one uppercase
                letter, one special character, and number{' '}
              </span>
            )}

            <div className="flex items-center justify-between">
              <p className="mr-7 ml-7 font-light text-[#9DAFBD]">
                {t('Birth Date')}
              </p>
              <input
                {...register('birthdayDay', {
                  pattern: /^(0?[1-9]|[12][0-9]|3[01])$/,
                })}
                type="text"
                placeholder="DD"
                className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
              <input
                {...register('birthdayMonth', {
                  pattern: /^(0?[1-9]|1[0-2])$/,
                })}
                type="text"
                placeholder="MM"
                className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
              <input
                {...register('birthdayYear', {
                  pattern: /^(1[0-9][0-9][0-9]|20[0-1][0-9]|200[0-2])$/,
                })}
                type="text"
                placeholder="YYYY"
                className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
             
            </div>
            {errors.birthdayDay?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                invalid Day{' '}
              </span>
            )}

            {errors.birthdayMonth?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                invalid Month{' '}
              </span>
            )}
            {errors.birthdayYear?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                invalid Year{' '}
              </span>
            )}

            <div className="flex justify-around py-3 gap-8">
              <Link to="/login">
                <button
                  type="button"
                  className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
                >
                  {t('Login')}
                </button>
              </Link>
              <button
                type="submit"
                className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md"
              >
                {t('Sign Up')}
              </button>
            </div>
          </form>
          <div className="flex justify-around my-6">
            <p>{t('Or')}</p>
          </div>
          <div className="flex justify-center my-6 gap-x-20">
            <button
              type="button"
              style={{ height: 32, width: 32 }}
              onClick={(userData) => {
                dispatch(
                  loginUserWithGoogle({
                    id: userData.id,
                    email: userData.email,
                  })
                );
              }}
            >
              <img src={googleicon} alt="Google Icon" />{' '}
            </button>
            <button
              type="button"
              style={{ height: 32, width: 32 }}
              onClick={(userData) => {
                dispatch(loginUserWithFacebook({ email: userData.email }));
              }}
            >
              {' '}
              <img src={facebookicon} alt="facebookicon" />{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
