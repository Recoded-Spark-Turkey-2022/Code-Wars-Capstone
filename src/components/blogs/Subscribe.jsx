import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import RiSendPlaneFill from './Images/Style.png';
import { db } from '../../firebase-config';

const SubscribeForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      setError('Please enter an email address');
      
    }
    // Email is valid, add it to Firestore

    await addDoc(collection(db, 'emails'), {
      useremail: email,
    });
    setEmail('');
    setError('');
    navigate('/thank-you');
  };

  return (
    <div className="pt-[2rem] sm:w[5rem]   ">
      <form>
        <label htmlFor="email">
          <input
            className=" w-[15rem] h-[2.5rem] text-xl leading-loose text-gray-500 bg-white border-2 text-left border-gray-500 "
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t("Enter your e-mail")}
          />

          <button
            className="  w-[3rem] h-[2.5rem] leading-loose bg-[#2DD3E3] border-2  rounded-br-md border-gray-500 translate-y-1  hover:bg-cyan-500 hover:text-white "
            type="submit"
            onClick={handleSubmit}
          >
            {' '}
            <img
              src={RiSendPlaneFill}
              alt="sendicon"
              className="  hover:img-white mx-auto w-[1.5rem]"
            />{' '}
          </button>
          <div>{error && <p>{error}</p>}</div>
          <div />
        </label>
      </form>
    </div>
  );
};

export default SubscribeForm;
