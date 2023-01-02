import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

function ThankYouPage() {
  const navigate = useNavigate ();
  
  return (
    <div>
      <h1 className="w-72 text-5xl">Thank you!</h1>
      <p className="text-2xl text-black text-opacity-50" style={{width: 1144,}} >Your email has been added to the mailing list successfully!</p>
      <Link to="/thank-you">
      <div className="w-72 h-16">
    <div className="flex items-center justify-center flex-1 font-bold h-full py-3 bg-[#2DD3E3] rounded-md">
    <button className="flex-1 h-full text-2xl text-center uppercase"  type='submit' onClick={navigate("/home")}>Back to home</button>
    </div>
</div>
      </Link>
    </div>
  );
}

export default ThankYouPage;



