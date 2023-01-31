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

        <div className='lg:flex lg:flex-row lg:justify-around md:flex md:flex-col md:items-center    '>
        <div className="lg:flex-1  lg:mt-20 lg:ml-40  md:mt-10  z-10 ">
            <p className="lg:text-[2.1875rem] md:text-[1.2rem] sm:text-[0.75]  ">We Are Here To</p>
            <p className="lg:text-[8rem] md:text:[4rem] sm:text-[2rem] lg:mb-12 md:mb-4 ">Help</p>
            <button
              type="button"
              onClick={handleClick}
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white" 
            >
              BOOK AN APPOINTMENT
            </button>
            </div>
          <div className="lg:mt-20 Lg:mr-40 z-10  md:mt-10 md:mr-20   sm:mt-5 sm:mr-10 lg:w-max md:w-4/12 md:ml-10  ">
            <img src={Mainimg} alt="iltration" className="imgsofa" />
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
