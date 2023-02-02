import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/users/usersSlice';
 
const FormCard = ({setErrorshow , error}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  const nevigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // perform some action with the email and password values
    dispatch(loginUser({ email, password }));
    setErrorshow(true)
    if(error.length > 0){
      setErrorshow(false)
    }
  };

  return (

    <div className="max-w-sm  rounded-lg shadow-lg p-8 lg:ml-20  ">
      
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder={t("Enter your email")}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="shadow appearance-none border block rounded lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          id="password"
          type="password"
          placeholder={t("Enter your password")}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="md:text-xl lg:px-12 rounded-md box-border py-2  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
          type="submit"
        >
          {t('Login')}
        </button>
        <button
          className=" hover:bg-cyan-500 text-cyan-500 font-bold py-2 lg:px-12 rounded mt-4 translate-x-4 border border-cyan-500 rounded hover:text-white"
          type="submit"
          onClick={() => {
            nevigate('/signup');
          }}
        >
          {t('Sign Up')}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
