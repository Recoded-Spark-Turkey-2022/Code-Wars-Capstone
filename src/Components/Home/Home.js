import Carousel from 'react-multi-carousel';
import BookAppointment from './Book an Appointment/bookAppointment';
import Therapist from './therapist/Therapist';
import CommuncicationCard from './communication/CommuncicationCard';
import TicketPage from './Purchasetickets/Purchasetickets';
import BlogSlider from '../blogs/SliderBlog';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <>
      <BookAppointment />
      <Therapist />
      <CommuncicationCard />
      <BlogSlider Carousel={Carousel} />
      <TicketPage />
    </>
  );
}
