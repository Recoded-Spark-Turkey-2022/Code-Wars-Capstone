import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from './card';
import InfoCard from './InfoCard';

function Purchasetickets() {
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="space-y-5 p-10 flex flex-col justify-evenly ">
      <p className=" lg:text-5xl md:ml-10 text-5xl mt-10 text-start">
        {' '}
        {t('Purchase tickets')}
      </p>
      <p className="lg:text-2xl md:ml-10 text-2xl mt-10 text-start">
        {' '}
        {t('PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!')}
      </p>

      <div className=" lg:flex lg:flex-row  md:flex md:flex-col lg:gap-14  md:gap-8 gap-4 lg:ml-40 mb-20 md:mb-10 ">
        <Card className="flex-1" Header={t("5 TICKETS")} Price="10$" />
        <Card className="flex-1" Header={t("25 TICKETS")} Price="40$" />
        <Card className="flex-1" Header={t("50 TICKETS")} Price="70$" />
      </div>

      <InfoCard />
    </div>
  );
}

export default Purchasetickets;
