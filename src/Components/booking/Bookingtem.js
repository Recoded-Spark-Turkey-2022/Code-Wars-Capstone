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
    <>
      <h1 className="text-5xl uppercase" > let&apos;s match you with the right therapist </h1>
  <p className=' text-2xl text-justify text-black text-opacity-50 lg:w-[65rem]'>Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like to deal with in online therapy. It would help us match you 
  <br/>with the most suitable therapist for you.</p>
  <div>
      <h1>{question}</h1>
      {choices.map((choice) => (
        <button type='submit' >{choice}</button>
      ))}
      <button type='submit'>next</button>
      </div>
    </>
  );
};

export default Bookingtem;