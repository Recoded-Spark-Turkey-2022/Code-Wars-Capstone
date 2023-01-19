import InputTrigger from 'react-input-trigger';
import React, { useCallback } from "react";
import HeaderBooking from "./HeaderBooking";

const Node =()=>{
    
    const emailInput = useCallback((inputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);

return (
    <div className='ml-20'>
    
    
   
    <HeaderBooking  Header="What brings you here?" par={`Please specify (in a few sentences) why you'd like counseling. This will give your counselor a good understanding of where to start.`}  />
     <InputTrigger>
        <textarea
          style={{
            height: '16rem',
            lineHeight: '3em',
            borderRadius: "6px",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 4px",
         
          }}
          className=" ml-20 mt-10 focus:outline-none lg:w-[60rem] md:w-[40rem] sm:w-[20rem] " 
          ref={emailInput}
          placeholder='Write Something Here...'
        />
      </InputTrigger>
      <button type="submit" className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 px-4 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white ml-20 mt-10"> Next    </button>
    </div>
)
}
export default Node ;