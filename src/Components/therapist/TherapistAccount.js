import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTherapistProfile } from '../../features/users/usersSlice';


function TherapistAccount() {
    const [userData, setuserData] = useState({
        Username: "",
        Email: "",
        City: "",
        Licensenumber: ""
      });
    const [Password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const handleChange = e => {
        setuserData({ ...userData, [e.target.name]: e.target.value });
      
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (Password !== confirmPassword) {
            setError('Passwords do not match');
          } else {
            setError('');
      };
      console.log(userData)
      dispatch(createTherapistProfile({userData,Password}));
    }
  return (
     <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          name='Username'
          value={userData.Username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Email:
        <input
          type="text"
          name='Email'
          value={userData.Email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      City:
        <input
          type="text"
          name='City'
          value={userData.City}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Licensenumber:
        <input
          type="text"
          name="Licensenumber"
          value={userData.Licensenumber}
          onChange={handleChange}
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
        />
      </label>
      <br />
      <label>
      ConfirmPassword:
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
      </label>
      <br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button  type="submit" onSubmit={handleSubmit}  className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]">Create</button>
    </form>
  )
}

export default TherapistAccount