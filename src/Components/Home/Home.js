import  BookAppointment from "./Book an Appointment/bookAppointment"
import Therapist  from "./therapist/Therapist" ;
import CommuncicationCard  from './communication/CommuncicationCard';
import TicketPage from './Purchasetickets/Purchasetickets';


export default function Home(){
    return (
        <>
         <BookAppointment />
        <Therapist />
        <CommuncicationCard/>
        <TicketPage/>
        </>
    )
}