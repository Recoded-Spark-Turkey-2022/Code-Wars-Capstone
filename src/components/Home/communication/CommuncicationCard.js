import Card from "./card";
import Chat from "./Imges/chat.svg" 
import PhoneCall from "./Imges/phonecall.svg" 
import Video from "./Imges/video.svg" 



function CommuncicationCard(){
return (
 
    < >
    <p style={{fontFamily: 'Poppins, sans-serif'}} className="lg:text-4xl lg:my-20 lg:ml-40 md:text-xl md:my-8 md:ml-10  ">
     WE CAN COMMUNICATE THROUGH
    </p>
        <div className="lg:flex lg:flex-row  lg:gap-8 md:flex md:flex-col md:gap-4 mb-20  lg:mx-40  md:ml-10   ">
    <Card  imageUrl={PhoneCall} header="Voice Call" text="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!" />
    <Card  imageUrl={Chat} header="Chat" text="Need to talk to someone? Come have a chat with your therapist!" />
    <Card imageUrl={Video} header="Video Call" text="For better experience therapists recommend video calls, but always remember that its a choice!" />
    </div>
    </>
  
   
   
)
}
export default CommuncicationCard;