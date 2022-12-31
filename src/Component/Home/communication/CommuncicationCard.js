import Card from "./card";
import Chat from "./Imges/chat.svg" 
import PhoneCall from "./Imges/phonecall.svg" 
import Video from "./Imges/video.svg" 



function CommuncicationCard(){
return (
 
    <>
    <p className="text-4xl absolute translate-y-10 translate-x-20 ">
     WE CAN COMMUNICATE THROUGH
    </p>
        <div className="flex gap-8 mx-20 translate-y-1/3 mt-20 ">
    <Card  imageUrl={PhoneCall} header="Voice Call" text="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!" />
    <Card  imageUrl={Chat} header="Chat" text="Need to talk to someone? Come have a chat with your therapist!" />
    <Card imageUrl={Video} header="Video Call" text="For better experience therapists recommend video calls, but always remember that its a choice!" />
    </div>
    </>
  
   
   
)
}
export default CommuncicationCard;