import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function InfoCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const buttonHanler = (e) => {
    e.preventDefault();
    navigate('/Requirement');
  };

  return (
    <div>
      <div className="flex flex-col shadow-lg  p-10  text-center rounded-lg lg:w-9/12 lg:ml-40  lg:mb-20 lg:space-y-0 space-y-5">
        <h1 className=" lg:text-5xl  text-2xl lg:pt-8 md:pt:6 sm:pt:4 ">
          {t('Are you a counselor?')}{' '}
        </h1>
        <p className="lg:text-1xl md:text-xl	sm:text-sm text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   lg:pb-6 md:pb:4 sm:pb:2 ">
          {t('Interested in joining our mental health platform? You decide your schedule and how much you want to work, we’ll take care of the client referrals and billing details!')}
        </p>
        <button
          type="submit"
          className="lg:text-2xl md:text-2xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white lg:w-2/6 m-auto "
          onClick={buttonHanler}
        >
          {' '}
          {t('LEARN MORE')}{' '}
        </button>
      </div>
    </div>
  );
}
