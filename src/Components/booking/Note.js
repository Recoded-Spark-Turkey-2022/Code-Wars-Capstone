import InputTrigger from 'react-input-trigger';
import React, { useCallback , useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderBooking from "./HeaderBooking";
import {AddAnswer} from "../../features/users/usersSlice"



const Node =()=>{
  const [inputvalue , setinputValue] = useState();
  const dispatch = useDispatch();

    
    const emailInput = useCallback((inputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);
      const navigate = useNavigate();
      const handleSubmite = (e)=>{
        e.preventDefault();
        navigate("/bookingsubmit")
        dispatch(AddAnswer(inputvalue))
      }
       
return (
    <div  >
    

          <div className='ml-20 mb-20'>

         
   
   
    <HeaderBooking  className="" Header="What brings you here?" par={`Please specify (in a few sentences) why you'd like counseling. This will give your counselor a good understanding of where to start.`}  />
    </div>
     <InputTrigger className="grid justify-items-center">
        <textarea
          style={{
            height: '18rem',
            lineHeight: '3em',
            borderRadius: "6px",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 4px",
         
          }}
          onChange={(e)=>{setinputValue(e.target.value)}}
          className="   focus:outline-none lg:w-[75rem] md:w-[40rem] sm:w-[20rem]  " 
          ref={emailInput}
          placeholder='Write Something Here...'
        />
      </InputTrigger>
      <button type="submit" onClick={handleSubmite} className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 px-4 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white ml-40 mt-10"> Next    </button>
    </div>
)
}
export default Node ;