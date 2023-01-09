import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  signupUser,
  loginUserWithFacebook,
  loginUserWithGoogle,
} from '../features/users/usersSlice';
import facebookicon from './login/Images/facebook.svg';
import googleicon from './login/Images/google.svg';
import Sofa from './sofa.png';

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20 mb-32">
      {/* <img src={Image} alt="Sign up" /> */}
       <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20 mb-32"><img src={Sofa} alt="Sofa" /></div>
      <div className="flex flex-col">
        <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
          SIGNUP NOW
        </h2>
        <form
          className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]"
          onSubmit={handleSubmit((userData) => {
            console.log(userData);
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
          })}
        >
          <div className="flex gap-x-7">
            <input
              {...register('firstName')}
              type="text"
              placeholder="First Name"
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
            <input
              {...register('lastName')}
              type="text"
              placeholder="Last Name"
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
          </div>
          <input
            {...register('email')}
            type="text"
            placeholder="Your Email"
            className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            {...register('emailConfirmation')}
            type="text"
            placeholder="Confirm email"
            className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <div className="flex gap-x-7">
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
            <input
              {...register('passwordConfirmation')}
              type="password"
              placeholder="Confirm password"
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="mr-7 ml-7 font-light text-[#9DAFBD]">Birth Date</p>
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
          </div>
          <div className="flex justify-around py-3 gap-8">
            <Link to="/login">
              <button
                type="submit"
                className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
              >
                Login
              </button>
            </Link>
            
              <button
                type="submit"
                className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md"
              >
                Signup
              </button>
            
          </div>
        </form>
        <div className="flex justify-around my-6">
          {/* <img src={lineImage} alt="A line" /> */}
          {/* <img src={lineImage} alt="A line" /> */}
        </div>
        <div className="w-full text-center border-b-2 border-cyan-400 mt-2.5 mb-5 leading-[0.1em]"><span className="px-2 bg-white">Or</span></div>
        <div className="flex justify-center my-6 gap-x-20">
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
              dispatch(loginUserWithFacebook({ email: userDat.email }));
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
