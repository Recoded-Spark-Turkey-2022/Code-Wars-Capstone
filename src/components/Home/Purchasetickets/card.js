import React from 'react';
import { useTranslation } from 'react-i18next';

function Card({ Header, Price }) {
  const { t } = useTranslation();
  const buttonHanler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col shadow-lg   px-10 py-16  text-center rounded-lg lg:w-3/12  ">
      <h1 className=" lg:text-5xl text-4xl  lg:pt-8 md:pt:6 sm:pt:4 ">
        {' '}
        {Header}
      </h1>
      <p className="lg:text-2xl text-3xl text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   pb-6 md:pb:4  ">
        {' '}
        {Price}
      </p>
      <button
        type="submit"
        className="lg:text-2xl text-1-3xl  rounded-md  box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white m-auto"
        onClick={buttonHanler}
      >
        {' '}
        {t('Purchase')}{' '}
      </button>
    </div>
  );
}

export default Card;
