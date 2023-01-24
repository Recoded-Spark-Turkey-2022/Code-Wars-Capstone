import React from 'react';
import Therapistimg from './Therapistimg.svg';

function Therapist() {
  return (
    <div className='h-screen'>
      <div className="bg-amber-200 h-screen "  style={{fontFamily: 'Poppins, sans-serif'}} >
        <h1 className=" lg:text-5xl text-lg font-bold lg:w-10/12 sm:p-8  sm:pl-40  ">
          PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
        </h1>
        <img className=" pb-8 pl-40" src={Therapistimg} alt="therapists" />
        <p className="pl-40 lg:text-2xl font-seri text-sm lg:w-11/12 lg:pb-5 sm:pb-16">
          Tap into the worlds largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>

        <button
          type="button"
          className="text-xl md:text-lg ml-40 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white "
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default Therapist;




/* import Therapistimg from "./Therapistimg.svg"

function Therapist(){
    return (
        <div className="bg-amber-200  h-screen"> 
               <p className="tracking-wider lg:text-5xl text-lg font-bold lg:w-7/12 lg:font-poppins lg:pt-20 pt-20 pl-16 sm:p-16 sm:font-poppins"> PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST</p>  
                <img src={Therapistimg} className="" alt="Therapistimg"/> 
        </div>

    )

}
export default Therapist ; */