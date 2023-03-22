import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  signupUser,
  loginUserWithFacebook,
  loginUserWithGoogle,
} from '../features/users/usersSlice';
import facebookicon from './login/Images/facebook.svg';
import googleicon from './login/Images/google.svg';
import imagee from './Singupimage.svg';

const Singup = () => {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.users);
  const { signedup } = useSelector((state) => state.users);

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

  const onSubmitform = async (userData) => {
    console.log(userData);

    if (userData.email !== userData.emailConfirmation) {
      showalertitm(true);
      setError('Your Email should  match');
    } else if (userData.password !== userData.passwordConfirmation) {
      showalertitm(true);
      setError('Your Password should  match');
    } else {
      showalertitm(false);
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
    }
  };

  useEffect(() => {
    if (signedup === true) {
      navigate('/signup-thanks');
    }
  }, [signedup]);

  return (
    <div> 

{alertitem && (
        <Alert severity="error" className="fixed w-full">
          {error}
        </Alert>
      )}
      {enteredInput && (
        <Alert severity="error" className="fixed w-full">
          {userInfo.error}
        </Alert>
      )}
   
    <div className=" flex flex-col  justify-center lg:flex lg:flex-row lg:justify-around ">
      <div>
        <img src={imagee} alt="singupemage" className="lg:mt-40 mt-10" />
      </div>

      <div>
        <h2 className='text-3xl lg:text-5xl font-["Poppins"] font-normal lg:mb-6 mb-10 lg:mt-10 lg:ml-0 ml-4 mt-10 '>
          {t('SIGNUP NOW')}
        </h2>

        <div className='flex justify-center'>
          <form
            className="shadow-2xl lg:px-10 lg:py-10 lg:w-[500px] px-4 py-4 flex flex-col gap-4  "
            onSubmit={handleSubmit(onSubmitform)}
          >
            <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-4">
              <div>
                <input
                  className="broder-solid border-2  placeholder-gray-300 lg:w-48  h-12 "
                  {...register('firstName', { pattern: /^[A-Za-z]+$/i })}
                  type="text"
                  placeholder={t('First Name')}
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  required
                />
                {errors.firstName?.type === 'pattern' && (
                  <span className="text-red-600" role="alert">
                    The first Name must not contain numbers
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                  type="text"
                  placeholder={t('Last Name')}
                  className=" broder-solid border-2 placeholder-gray-300 lg:w-48  h-12"
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  required
                />
                {errors.lastName?.type === 'pattern' && (
                  <span className="text-red-600" role="alert">
                    The Last Name must not contain numbers
                  </span>
                )}
              </div>
            </div>

            <div >
              <input
                {...register('email', {
                  pattern:
                    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                placeholder={t('Your Email')}
                className=" broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 lg:w-full h-12 "
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
              {errors.email?.type === 'pattern' && (
                <span className="text-red-600" role="alert">
                  please enter a valid email address{' '}
                </span>
              )}
            </div>
                
               <div> 
                
            <input
              {...register('emailConfirmation')}
              type="text"
              placeholder={t('Confirm email')}
              className=" broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 lg:w-full h-12"
              required
            />
                </div> 

            <div className='lg:flex lg:flex-row lg:justify-between flex flex-col gap-4'> 

                <div> 
                <input
                {...register('password', {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                })}
                type="password"
                placeholder={t('Password')}
                className="broder-solid border-2  placeholder-gray-300 h-12 lg:w-48"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
               {errors.password?.type === 'pattern' && (
              <span className="text-red-600" role="alert">
                password must be eight characters including one uppercase
                letter, one lower case letter, and number{' '}
              </span>
            )}
                </div>
                    
                <div> 
                    
              <input
                {...register('passwordConfirmation')}
                type="password"
                placeholder={t('Confirm Password')}
                className="broder-solid border-2  placeholder-gray-300 h-12 lg:w-48"
                required
              />
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between ">
              <p className="mr-7 ml-7 font-light text-[#9DAFBD]">
                {t('Birth Date')}
              </p>
              <input
                {...register('birthdayDay', {
                  pattern: /^(0?[1-9]|[12][0-9]|3[01])$/,
                })}
                type="text"
                placeholder="DD"
                className="h-12 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
              <input
                {...register('birthdayMonth', {
                  pattern: /^(0?[1-9]|1[0-2])$/,
                })}
                type="text"
                placeholder="MM"
                className="h-12 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
              <input
                {...register('birthdayYear', {
                  pattern: /^(1[0-9][0-9][0-9]|20[0-1][0-9]|200[0-2])$/,
                })}
                type="text"
                placeholder="YYYY"
                className="h-12 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                required
              />
            </div>
            <div> 
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
            </div>
            <div className="flex justify-around py-3 gap-8">
              <Link to="/login">
                <button
                  type="button"
                  className="bg-[#2DD3E3] font-medium lg:text-2xl lg:px-14 py-3 px-4 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
                >
                  {t('Login')}
                </button>
              </Link>
              <button
                type="submit"
                className="broder-solid border-2 border-[#2DD3E3] font-medium lg:text-2xl lg:px-14 px-4 py-3 rounded-md"
              >
                {t('Sign Up')}
              </button>
            </div>
          </form>
        </div>
        <div> 

        <div className="flex justify-around my-6">
            <p>{t('Or')}</p>
          </div>
          <div className="flex justify-center my-6 gap-x-12">
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
    </div>
  );
};
export default Singup;
