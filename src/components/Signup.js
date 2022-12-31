import React from 'react';
import { useSelector } from 'react-redux';

const users = useSelector((state) => state.users.users);

function SignupForm() {
  return (
    <div>
      <div>
        <h2>SIGNUP NOW</h2>
        <h1>{users}</h1>
        <form>
          <div>
            <input type="text" placeholder="First Name" name="userFirstName" />
            <input type="text" placeholder="Last Name" name="userLastName" />
          </div>
          <input type="text" placeholder="Your Email" name="userEmail" />
          <input
            type="text"
            placeholder="Confirm email"
            name="userConfirmEmail"
          />
          <div>
            <input type="password" placeholder="Password" name="userPassword" />
            <input
              type="password"
              placeholder="Confirm password"
              name="userConfirmPassword"
            />
          </div>
          <div>
            <p>Birth Date</p>
            <input type="text" placeholder="DD" name="dayOfBirth" />
            <input type="text" placeholder="MM " name="monthOfBirth" />
            <input type="text" placeholder="YYYY" name="yearOfYear" />
          </div>
          <div>
            <button type="submit">Login</button>
            <hr />
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
