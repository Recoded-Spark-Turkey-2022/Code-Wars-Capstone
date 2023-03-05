import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import bacgroundImg from './Images/BackGround.png';
import Mainimg from './Images/Towperson.svg';

function BookAppointment() {
  const { t } = useTranslation();
  const [alertitem, showalertitm] = useState(false);
  const userid = useSelector((state) => state.users.user.id);
  const navigate = useNavigate();
  const handleClick = () => {
    if (userid !== undefined) {
      navigate('booking1/1');
    } else {
      showalertitm(true);
    }
  };

  return (
    <div className=''>
    <div
      className="z-20"
      style={{
        backgroundImage: `url(${bacgroundImg})`,
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        top: 0,
      }}
    >
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        {alertitem && (
          <Alert severity="info" className="">
            You should log in First to Book an Appointment{' '}
          </Alert>
        )}

        <div className="flex items-center lg:flex-row flex-col justify-evenly p-10">
          <div className=" mt-20">
            <p className="text-[2.1875rem] pt-[0rem] ">
              {t('We Are Here To')}
            </p>
            <p className="lg:text-[7rem] text-[4rem]">
             {t('Help')}
            </p>
            <button
              type="button"
              onClick={handleClick}
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {t('BOOK AN APPOINTMENT')}
            </button>
          </div>
            <img src={Mainimg} alt="iltration" className='pt-10' />
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default BookAppointment;
