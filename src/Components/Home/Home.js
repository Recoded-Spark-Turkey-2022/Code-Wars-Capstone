import  BookAppointment from "./Book an Appointment/bookAppointment"
import Therapist  from "./therapist/Therapist" ;
import CommuncicationCard  from './communication/CommuncicationCard';


export default function Home(){
    return (
        <>
         <BookAppointment />
        <Therapist />
        <CommuncicationCard/>
        </>
    )
}