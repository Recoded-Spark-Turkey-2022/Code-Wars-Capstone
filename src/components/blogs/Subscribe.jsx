

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
    <form >
      <label htmlFor="email" >Email:
      <input className="w-64 h-full text-xl leading-loose text-gray-500"
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} placeholder="Enter your e-mail"
      /> 
      </label>
      <button type="submit" onClick={handleSubmit} >Subscribe</button>
      {error && <p>{error}</p>}
      
    </form>
  );
};

export default SubscribeForm;
