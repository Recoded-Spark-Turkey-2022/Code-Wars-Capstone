import React, { useState  } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {RadioQustion} from "./bookingData" ;
import  RadioAnswer from "./RadioAnswer"
import HeaderBooking from "./HeaderBooking"
import {AddAnswer} from "../../features/users/usersSlice"

const Bookingradio = () => {
 
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('');
  const QustionPages = RadioQustion.filter((obj)=> obj.id === id)
  const Question = QustionPages[0].Qustion
  const handleclick = async () => { 
    if(id === "1"){
      navigate('/booking2/2')
    }
    else{
      navigate("/bookingnote")
    }
    dispatch(AddAnswer({[Question]:selectedValue}))
  }
  
  return (
    < >
      <HeaderBooking Header =" let&apos;s match you with the right therapist" par="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&apos;d like to deal with in online therapy. It would help us match you 
        with the most suitable therapist for you."/>
  <div className=' grid justify-items-center'>
  <div className=' flex-col space-y-8 px-10 pt-8 pb-[1rem] bg-white shadow-lg roundedflex-col lg:w-[37rem] md:w-[30rem] md:w-[25rem] space-y-8 px-10 pt-8 pb-[2rem] bg-white shadow-xl rounded'>
      <h1 className='text-2xl capitalize'>{QustionPages[0].Qustion}</h1>
      <div className=' grid justify-items-LEFT space-y-3 '> <RadioAnswer selectedValue ={selectedValue} setSelectedValue={setSelectedValue} choices={QustionPages[0].answer} /> </div>
      <button onClick={()=>handleclick()} className='inline-block align-bottom uppercase md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ' type='submit'>next</button>
      </div>
      </div>
      </>
  );
};

export default Bookingradio;


