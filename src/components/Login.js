import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20">
      <div>
        <h2 className='text-5xl font-["Poppins"] font-normal mb-44 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
          LOGIN
        </h2>
        <form
          className="grid grid-rows-3 gap-12 shadow-2xl px-10 py-10"
          onSubmit={handleSubmit((userData) => {
            console.log(userData);
          })}
        >
          <input
            {...register('email')}
            type="text"
            placeholder="Your Email"
            className="h-20 broder-solid border-2 border-[#D1DBE3] rounded-md"
          />
          <input
            {...register('password')}
            type="text"
            placeholder="Your Password"
            className="h-20 broder-solid border-2 border-[#D1DBE3] rounded-md"
          />
          <div className="flex justify-around py-3 gap-8">
            <button
              type="submit"
              className="bg-[#2DD3E3] font-medium text-2xl px-14 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
            >
              Login
            </button>
            <button
              type="submit"
              className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 rounded-md"
            >
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
