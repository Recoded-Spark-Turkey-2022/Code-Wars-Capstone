import React, { useState } from "react";
// import { useId } from "react-id-generator";
import { useDispatch } from "react-redux";
import { contactForm } from "../../features/users/usersSlice";

const Options = ["I have a question about the service.", "I'm a registered client and I need support.", "I'm a counselor interested in joining.", "I'm a registered counselor and I need support.", "I have a business-related inquiry.", "I have a billing related question."
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    details: "",
    selectedOption: ""
  });
  const dispatch = useDispatch();


const handleOptionChange = (option) => {
    setFormData({ ...formData, selectedOption: option });
  };


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(contactForm(formData));
    // navigate("/Formsubmittionthanks")}
    // console.log(formData)
  };
  return (
    <form onSubmit={handleSubmit} >
        
         {Options.map((option) => (
            <div className="flex flex-row">
        <label >
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
      <br />
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Details:
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
        />
      </label>
      <br />
     
      <button type="submit" className="lg:text-xl md:text-l sm:text-sm rounded-md box-border py-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white  m-auto" onSubmit={handleSubmit} >Submit</button>
    </form>
  );
};

export default ContactUs;
