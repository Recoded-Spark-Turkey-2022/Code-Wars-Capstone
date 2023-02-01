import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
  const [enteredInput, setEnteredInput] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20 mb-32">
      <div className="flex flex-col">
        <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
          {t('SIGNUP NOW')}
        </h2>
        <form
          className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]"
          onSubmit={handleSubmit((userData) => {
            if (userData.firstName.trim() === '') {
              return;
            }
            if (userData.lastName.trim() === '') {
              return;
            }
            if (
              userData.password.trim() !== userData.passwordConfirmation.trim()
            ) {
              return;
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
            navigate('/signup-thanks');
          })}
        >
          <div className="flex gap-x-7">
            <input
              {...register('firstName')}
              type="text"
              placeholder={t("First Name")}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
            <input
              {...register('lastName')}
              type="text"
              placeholder={t("Last Name")}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
          </div>
          <input
            {...register('email')}
            type="text"
            placeholder={t("Your Email")}
            className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            {...register('emailConfirmation')}
            type="text"
            placeholder={t("Confirm email")}
            className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <div className="flex gap-x-7">
            <input
              {...register('password')}
              type="password"
              placeholder={t("Password")}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
            <input
              {...register('passwordConfirmation')}
              type="password"
              placeholder={t("Confirm Password")}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="mr-7 ml-7 font-light text-[#9DAFBD]">{t('Birth Date')}</p>
            <input
              {...register('birthdayDay')}
              type="text"
              placeholder="DD"
              className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
            <input
              {...register('birthdayMonth')}
              type="text"
              placeholder="MM"
              className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
            <input
              {...register('birthdayYear')}
              type="text"
              placeholder="YYYY"
              className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300"
            />
            {enteredInput && <p>{userInfo.error}</p>}
          </div>
          <div className="flex justify-around py-3 gap-8">
            <Link to="/login">
              <button
                type="submit"
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
                loginUserWithGoogle({ id: userData.id, email: userData.email })
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
  );
};

export default SignupForm;
