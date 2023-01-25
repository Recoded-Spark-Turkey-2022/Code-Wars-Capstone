import React, { useState } from 'react';
// import { useId } from "react-id-generator";
import { useDispatch } from 'react-redux';
import { contactForm } from '../../features/users/usersSlice';
import Header from '../booking/HeaderBooking';
import Image from "./Images/tow.png"

const Options = [
  ' I have a question about the service.',
  " I'm a registered client and I need support.",
  " I'm a counselor interested in joining.",
  " I'm a registered counselor and I need support.",
  ' I have a business-related inquiry.',
  " I'm interested in Healing Online for my organization.",
  ' I have a billing related question.'
];

const ContactUs = () => {

  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    details: '',
    selectedOption: '',
  });
  const dispatch = useDispatch();

  const handleOptionChange = (option) => {
    setFormData({ ...formData, selectedOption: option });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(contactForm(formData ));
  
  };
  return (
    <div>
      <Header
        Header="SEND US YOUR REQUEST!"
        par="Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we'd be happy to help! "
      />
      <div className='flex '>
        
        <form className="ml-20 flex-1" onSubmit={handleSubmit}>
         <p className="font-semibold mb-4"> Type of Contact</p>
          <div className="flex flex-col gap-4">
            {Options.map((option) => (
              <div className="flex flex-row">
                <label>
                  <input
                    type="radio"
                    name="selectedOption"
                    value={option}
                    checked={formData.selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
            </div>
            <br />
            <label className='font-semibold mb-4'>
              Full Name:
              <input type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange} 
               placeholder="Enter your full name here..." 
               className="input input-bordered input-accent w-7/12  block drop-shadow-xl rounded-lg p-2 " />
            </label>
            <br />
            <label className='font-semibold mb-4'>
              Email:
               <input  type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
               placeholder=" Enter your email address here..." 
               className="input input-bordered input-accent w-7/12 block drop-shadow-xl rounded-lg p-2" />
              
            </label>
            <br />
            <label className='font-semibold mb-4'>
              Details:
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder = "Enter your details here..."
                className = "w-7/12 block drop-shadow-xl rounded-lg p-2 h-32 "
              />
            </label>
            <br />
            <button
              type="submit"
              className="lg:text-xl md:text-l p-4 sm:text-sm rounded-md box-border py-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white  m-auto"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          
        </form>
        <div className='flex-1' >
          <img src={Image} alt="two poeple" className='w-8/12'/>
          <div className='bg-cyan-50 w-7/12 rounded-3xl ml-6 mt-20  '>
          


            <div className='p-6 pb-10'> 
            <p className='mb-4' >Find Us At: </p>
            <p className='text-slate-500' >Fatih/İstanbul</p>
            <p className='text-slate-500'>Sultan Ahmet </p>
            <p className='text-slate-500'>Ayasofya Meydanı</p>
            <p className='text-slate-500'>No:1 </p>
            <p className='text-slate-500'> 34122</p>
            </div>
          </div>


          </div>
      </div>
    </div>
  );
};

export default ContactUs;