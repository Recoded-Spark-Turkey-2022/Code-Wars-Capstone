import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import upload from './Images/ProfilePhoto.png';

function Profilepic({ profilepic, setprofilepic }) {
  const { t } = useTranslation();
  const [showbox, setshowbox] = useState(false);

  const handlesendfile = (e) => {
    setprofilepic(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <>
      <img
        src={profilepic}
        alt="profile pic"
        className="w-36 h-36 rounded-full"
      />
      <button
        type="button"
        onClick={() => setshowbox(true)}
        className="w-12 h-12 ml-14 absolute translate-y-28"
      >
        {' '}
        <img src={upload} alt="upload icon" />{' '}
      </button>
      {showbox && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black opacity-80 "
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <div className="bg-white rounded-lg p-6 w-[50%] flex flex-col">
            <h1 className="lg:text-4xl md:text-lg  ms:text-ms mb-4">
              {' '}
              {t('Upload Your Picture')}
            </h1>
            <hr />
            <input
              type="file"
              className="mt-4"
              accept="image/*"
              onChange={handlesendfile}
            />
            <button
              type="button"
              onClick={() => setshowbox(false)}
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white  self-end"
            >
              {' '}
              {t('Close')}{' '}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Profilepic;
