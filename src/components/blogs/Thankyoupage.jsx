import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

function ThankYouPage() {
  const navigate = useNavigate ();
  
  return (
    <div>
      <h1>Thank you!</h1>
      <p>Your email has been added to the mailing list successfully!</p>
      <Link to="/thank-you">
        <button  type='submit' onClick={navigate("/home")}>Back to home</button>
      </Link>
    </div>
  );
}

export default ThankYouPage;
