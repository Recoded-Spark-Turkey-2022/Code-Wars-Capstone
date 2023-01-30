import React from 'react';
import { useNavigate } from 'react-router-dom';

function Thankyoupage({ text, header }) {
  const navigate = useNavigate();
  
  return (
    <div className="pl-[5rem] mt-[3rem] ">
      <h1 className="pl-15 xl:w-72 xl:text-5xl  md:w-50 md:text-4xl sm:w-30 sm:text-2xl uppercase">
        {header}
      </h1>
      <p className="xl:text-2xl xl:w-[50rem] md:w-[30rem]  sm:w-[20rem] p-[3rem] text-black text-opacity-50 ">
        {text}
      </p>

      <div className="lg:w-72 lg:h-14 md:w-45 md:h-10 sm:w-40 sm:h-7 mr-20 ">
      <div className="flex items-center justify-center flex-1 py-3  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white rounded-md">
          <button
            className=" h-full xl:text-2xl sm:text-l text-center uppercase"
            type="submit"
            onClick={() => navigate('/')}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thankyoupage;