import { useTranslation } from 'react-i18next';

const HeaderBooking = ({ Header, par }) => {
    const { t } = useTranslation();
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="pb-[0.5rem] text-4xl tracking-wider md:text-2x sm:text-4xl mt-10 mb-2 ml-20 md:ml-10 uppercase ">
        {' '}
        {t(`${Header}`)}{' '}
      </h1>
      <p className="tex-xl md:text-xl text-stone-500 sm:text-base ml-20 mb-6 md:ml-10 w-8/12 tracking-wider ">
        {' '}
        {t(`${par}`)}
      </p>
    </div>
  );
};

export default HeaderBooking;
