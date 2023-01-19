import React from 'react';
import {  useParams , useNavigate} from 'react-router-dom';
import HeaderBooking  from './HeaderBooking';
import {MutipleChoose} from "./bookingData" ;
// import { useDispatch } from 'react-redux';
// import Booking from './Booking';


const Bookingtem = (  ) => {
  const {id} = useParams();
  const navigate = useNavigate();
  
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
   
  const handleClick = () => { 
    const nextId = parseInt(id, 10) +1 ;
    if(nextId <=3) {

      navigate(`/booking1/${nextId}`)
    }
    else (
      navigate('/booking2/1')
    )
    
 
   
  }
   
   const QustionPages = MutipleChoose.filter((obj)=> obj.id === id)
   const answersarray = QustionPages[0].answer ;  
 


    const answers=answersarray.map( (obj) => {

        return (

              <button type='submit' className='pl-[1rem] text-xl text-center capitalize flex items-center lg:w-[30rem] space-x-2 h-[4rem] bg-white border rounded-md border-gray-300  hover:bg-cyan-500 translate-y-1' >{obj}</button>

          
        )

      }
    
    )
 
  return (
    <div >
        <HeaderBooking Header =" let&apos;s match you with the right therapist" par="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like to deal with in online therapy. It would help us match you 
        with the most suitable therapist for you."/>
  <div className=' grid justify-items-center'>
  <div className=' flex-col  space-y-8 grid justify-items-start px-10 pt-8 pb-[10rem] bg-white shadow rounded'>
      <h1 className='text-3xl capitalize'>{QustionPages[0].Qustion}</h1>
      <div> 

        {answers}
      </div>
      <button  onClick={handleClick} className='inline-block align-bottom uppercase md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ' type='submit'>next</button>
      </div>
      </div>
      </div>
  );
};

export default Bookingtem;