import React from 'react';
import 'firebase/database';
// import { useDispatch } from 'react-redux';
// import Booking from './Booking';

const Bookingradio = ({ question, choices }) => {
  // const dispatch = useDispatch();

  // const handleSubmit = () =>  {
  //   dispatch(
  //     Booking({
  //       id: user.uid,
  //       question,
  //       choice,
    
  //     })
  //   );
  // }

  return (
    <div >
      <div className='pl-[3rem] pt-[3rem] pb-[3rem]'><h1 className="text-5xl uppercase" > let&apos;s match you with the right therapist </h1>
  <p className=' text-2xl text-justify text-black text-opacity-50 lg:w-[65rem]'>Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like to deal with in online therapy. It would help us match you 
  <br/>with the most suitable therapist for you.</p></div>
  <div className=' grid justify-items-center'>
  <div className=' flex-col space-y-8 px-10 pt-8 pb-[1rem] bg-white shadow-lg rounded'>
      <h1 className='text-3xl capitalize'>{question}</h1>
      <div className=' grid justify-items-LEFT space-y-3 '>{choices.map((choice) => (
        <label> <input type='radio' className='text-3xl text-black text-opacity-90 capitalize mr-3 shadow-lg' value={choice}/>{choice}</label>
      ))}</div>
      <button className='inline-block align-bottom uppercase md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ' type='submit'>next</button>
      </div>
      </div>
      </div>
  );
};

export default Bookingradio;