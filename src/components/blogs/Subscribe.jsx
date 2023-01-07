import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {RiSendPlaneFill} from  'react-icons/ri';                      



const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
     
      setError('Please enter an email address');
      return;
    }

      navigate('/thank-you');
   
  } 

   
   

  return (
     <div className='pt-[2rem]    '>
    <form >
      <label htmlFor="email" >
      <input className=" w-[15rem] h-[2.5rem] text-xl leading-loose text-gray-500 bg-white border-2  border-gray-500 "
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} placeholder="Enter your e-mail"
      /> 
     
      <button className='  w-[3rem] h-[2.5rem] leading-loose bg-[#2DD3E3] border-2  rounded-br-md border-gray-500' type="submit" onClick={handleSubmit} > <RiSendPlaneFill className="flex-auto w-10 h-4.5" /> </button>
      <div >{error && <p>{error}</p>}</div>
      <div />
      </label>
    </form>
    </div>
    

  );
};










export default SubscribeForm;
