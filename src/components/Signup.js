import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../features/users/usersSlice';

const SignupForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
  });

  const dispatch = useDispatch();
  const userEntered = useSelector((state) => state.users.users);
  // console.log(userEntered);
  // const history = useNavigate();

  useEffect(() => {
    if (userEntered) {
      // history.push('/');
      // console.log(userEntered);
      // dispatch(createAccount(userData.email, userData.password))
      console.log('true');
      // dispatch(signupUser(userData.email, userData.password));
    }
  }, [userEntered, userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.password !== userData.passwordConfirmation) {
      return;
    }
    dispatch(signupUser(userData.email, userData.password));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // return user((state) => {
    //   return {
    //     ...state,
    //     [name]: value,
    //   };
    // });
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20">
      <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
        SIGNUP NOW
      </h2>
      <form
        className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-x-7">
          <input
            type="text"
            placeholder="First Name"
            name="userFirstName"
            onChange={handleChange}
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="userLastName"
            onChange={handleChange}
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
        </div>
        <input
          type="text"
          placeholder="Your Email"
          name="userEmail"
          onChange={handleChange}
          className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
        />
        <input
          type="text"
          placeholder="Confirm email"
          name="userConfirmEmail"
          onChange={handleChange}
          className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
        />
        <div>
          <input
            type="password"
            placeholder="Password"
            name="userPassword"
            onChange={handleChange}
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="userConfirmPassword"
            onChange={handleChange}
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="mr-7 ml-7 font-light text-[#9DAFBD]">Birth Date</p>
          <input
            type="text"
            placeholder="DD"
            name="dayOfBirth"
            onChange={handleChange}
            className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            type="text"
            placeholder="MM "
            name="monthOfBirth"
            onChange={handleChange}
            className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            type="text"
            placeholder="YYYY"
            name="yearOfYear"
            onChange={handleChange}
            className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300"
          />
        </div>
        <div className="flex justify-around py-3 gap-8">
          <button
            type="submit"
            className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 rounded-md"
          >
            Login
          </button>
          <button
            type="submit"
            className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
