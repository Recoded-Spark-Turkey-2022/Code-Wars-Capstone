import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from './card';
import InfoCard from './InfoCard';

function Purchasetickets() {
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <p className="lg:text-5xl md:text-xl	 mt-10  lg:ml-40 md:ml-20">
        {' '}
        {t('Purchase tickets')}
      </p>
      <p className="lg:tex-xl md:text-lg sm:text-sm lg:ml-40 mb-6 md:ml-20">
        {' '}
        {t('PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!')}
      </p>

      <div className=" lg:flex lg:flex-row  md:flex md:flex-col lg:gap-14  md:gap-8 sm:gap-4 lg:ml-40 mb-20 md:mb-10 ">
        <Card className="flex-1" Header={t("5 TICKETS")} Price="10$" />
        <Card className="flex-1" Header={t("25 TICKETS")} Price="40$" />
        <Card className="flex-1" Header={t("50 TICKETS")} Price="70$" />
      </div>

      <InfoCard />
    </div>
  );
}

export default Purchasetickets;
