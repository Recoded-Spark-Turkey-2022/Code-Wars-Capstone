import { useTranslation } from 'react-i18next';
import Card from './card';
import Chat from './Imges/chat.svg';
import PhoneCall from './Imges/phonecall.svg';
import Video from './Imges/video.svg';

function CommuncicationCard() {
  const { t } = useTranslation();
  return (
    
    <div className='flex flex-col lg:justify-items-center p-10'>
      <p
        style={{ fontFamily: 'Poppins, sans-serif' }}
        className="lg:text-4xl text-3xl lg:my-20 my-10 md:my-8 md:ml-10  "
      >
       {t('WE CAN COMMUNICATE THROUGH')}
      </p>
      <div className="lg:flex lg:flex-row  lg:gap-8 md:flex md:flex-col md:gap-4 lg:mx-40 md:ml-10   ">
        <Card
          imageUrl={PhoneCall}
          header={t("Voice Call")}
          text={t("Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!")}
        />
        <Card
          imageUrl={Chat}
          header={t("Chat")}
          text={t("Need to talk to someone? Come have a chat with your therapist!")}
        />
        <Card
          imageUrl={Video}
          header={t("Video Call")}
          text={t("For better experience therapists recommend video calls, but always remember that its a choice!")}
        />
      </div>
      </div>
    
  );
}
export default CommuncicationCard;
