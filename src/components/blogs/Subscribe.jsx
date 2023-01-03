

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

import db from './Firebase';


const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email using regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      // Email is invalid, show an error message
      setError('Please enter an email address');
      return;
    }

    // Email is valid, add it to Firestore

  await addDoc(collection(db, "emails"), {
      useremail: email,    
    });
    // await db.firestore().collection('sub').add({ useremail: email });
 console.log(`${email} added to Firebase Firestore`);
    setEmail('');
    setError('');

     // Redirect to thank you page
    //  navigate.push('/thank-you');
    navigate("/thank-you");
  } 

   
   

  return (
    <div className="w-80 ml-10 h-1/3">  
    <form >
      <label htmlFor="email" >
      <input className="flex space-x-8 items-center justify-end flex-1 h-full px-4 py-2 bg-white border-2 rounded-md border-gray-500  "
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} placeholder="Enter your e-mail"
      /> 
      <div className="flex space-x- items-center  w-6 h-6 ml-60 px-4 py-2 " >
      <button className=' flex items-center justify-center w-16 h-full px-4 py-4 bg-[#2DD3E3] border-2 rounded-tr-md rounded-br-md border-gray-500' type="submit" onClick={handleSubmit} >Subscribe</button>
      <div className="flex-1 h-full border-gray-500 rounded-lg" >{error && <p>{error}</p>}</div>
      <div className="flex-1 h-full border-gray-500 rounded-lg"/>
      </div>
      </label>
    </form>
    
    </div>

  );
};








export default SubscribeForm;
