import React , { useState, useEffect , useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createTherapistProfile } from '../../features/users/usersSlice';
import HeaderBooking from '../booking/HeaderBooking';


function TherapistAccount() {
  const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState('');
    const [City, setCity] = useState("");
    const [Licensenumber, setLicensenumber] = useState("");
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


  
      const inputRef = useRef(null);
      useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (Password !== confirmPassword) {
            setError('Passwords do not match');
          } else {
            setError('');
      };
    
      dispatch(createTherapistProfile({Licensenumber,City,Username,Email,Password}));
    }
  return (
    <> 
    <HeaderBooking Header="CREATE AN ACCOUNT"/>
     <form onSubmit={handleSubmit} className="ml-20 w-6/12 text-slate-500">
      <label>
        User Name:
        <input
          type="text"
          name='Username'
          
          onChange={(e) => setUsername(e.target.value)}
          ref={inputRef}
          
          className="input input-bordered input-accent w-7/12  block  rounded-lg p-2 border border-SubTexts  " 

        />
      </label>
      <br />
      <label>
      Email:
        <input
          type="text"
          name='Email'
          
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered input-accent w-7/12  block  rounded-lg p-2 border border-SubTexts  " 
        />
      </label>
      <br />
      <label>
      City:
        <input
          type="text"
          name='City'
          onChange={(e) => setCity(e.target.value)}
          
          
          className="input input-bordered input-accent w-7/12  block  rounded-lg p-2 border border-SubTexts  " 
        />
      </label>
      <br />
      <label>
      Licensenumber:
        <input
          type="text"
          name="Licensenumber"
          onChange={(e) => setLicensenumber(e.target.value)}
         
          className="input input-bordered input-accent w-7/12  block  rounded-lg p-2 border border-SubTexts  " 
        />
      </label>
      <br />
      <label>
      Password:
        <input
          type="text"
          name='Password'
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered input-accent w-7/12  block  rounded-lg p-2 border border-SubTexts  " 
        />
      </label>
      <br />
      <label>
      ConfirmPassword:
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          className=" input input-bordered input-accent w-7/12  block  rounded-lg p-2 border border-SubTexts   " 
        />
      </label>
      <br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button  type="submit" onSubmit={handleSubmit}  className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border py-2 lg:px-10 md:px-4 sm:px-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white text-black mt-10">Create</button>
    </form>
    </>
  )
}

export default TherapistAccount