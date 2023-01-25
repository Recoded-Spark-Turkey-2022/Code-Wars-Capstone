import React , { useState } from 'react'


function TherapistAccount() {
    const [Username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [City, setCity] = useState('');
    const [Licensenumber, setLicensenumber] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
  

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Password !== confirmPassword) {
            setError('Passwords do not match');
          } else {
            setError('');
      };


  return (
     <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
      Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </label>
      <br />
      <label>
      City:
        <input
          type="text"
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <br />
      <label>
      Licensenumber:
        <input
          type="text"
          value={Licensenumber}
          onChange={(e) => setLicensenumber(e.target.value)}
        />
      </label>
      <br />
      <label>
      Licensenumber:
        <input
          type="text"
          value={Licensenumber}
          onChange={(e) => setLicensenumber(e.target.value)}
        />
      </label>
      <br />
      <label>
      Password:
        <input
          type="text"
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
      <button type="submit" onSubmit={handleSubmit} >Create</button>
    </form>
  )
}}

export default TherapistAccount