import React from 'react';
import 'firebase/database';
// import { useDispatch } from 'react-redux';


const Bookingtem = ({ question, choices }) => {
  // const dispatch = useDispatch();

  // const handleSubmit = () =>  {
  //   dispatch(
  //     Booking({
  //       email: userData.email,
    
  //     })
  //   );
  // }

  return (
    <div className='justify-items-center'>
      <h1 className="text-5xl uppercase" > let&apos;s match you with the right therapist </h1>
  <p className=' text-2xl text-justify text-black text-opacity-50 lg:w-[65rem]'>Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like to deal with in online therapy. It would help us match you 
  <br/>with the most suitable therapist for you.</p>
  <div className='inline-flex flex-col space-y-8 items-center justify-start px-10 pt-8 pb-64 bg-white shadow rounded'>
      <h1 className='text-3xl capitalize'>{question}</h1>
      <div>{choices.map((choice) => (
        <button type='submit' className='  flex items-center justify-start py-4 pl-6 pr-56 bg-white border rounded-md border-gray-300  hover:bg-cyan-500 translate-y-1' >{choice}</button>
      ))}</div>
      <button className='md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ' type='submit'>next</button>
      </div>
      </div>
  );
};

export default Bookingtem;