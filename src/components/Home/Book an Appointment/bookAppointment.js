import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import bacgroundImg from './Images/BackGround.png';
import Mainimg from './Images/Towperson.svg';

function BookAppointment() {
  const [alertitem, showalertitm] = useState(false);
  const userid = useSelector((state) => state.users.user.id);
  const navigate = useNavigate();
  const handleClick = () => {
    if (userid !== undefined) {
      navigate('booking1/1');
    } else {
      showalertitm(true);

      setTimeout(() => navigate('/login'), 5000);
    }
  };

  return (
    <div className="z-20"  style={{
      backgroundImage: `url(${bacgroundImg})`,
      height: '100vh',
      width: '98.92vw',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      top: 0,
    }}>
      <div
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {alertitem && (
          <Alert severity="info">
            You should log in First to Book an Appointment{' '}
          </Alert>
        )}

        <div className='flex justify-around  '>
        <div className="flex-1 mt-20 ml-40   z-10">
            <p className="lg:text-[2.1875rem] md:text-[1.2rem] sm:text-[0.75] translate-y-14 translate-x-2 ">We Are Here To</p>
            <p className="lg:text-[8rem] md:text:[4rem] sm:text-[2rem] mb-12">Help</p>
            <button
              type="button"
              onClick={handleClick}
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white" 
            >
              BOOK AN APPOINTMENT
            </button>
            </div>
          <div className="mt-20 mr-40 z-10 mb-20 ">
            <img src={Mainimg} alt="iltration" className="imgsofa" />
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
