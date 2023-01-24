import {useNavigate} from "react-router-dom"
import{useState} from "react"
import { useSelector } from "react-redux"
import {Alert} from '@mui/material';
import bacgroundImg from "./Images/BackGround.png"
import Mainimg from "./Images/Towperson.svg"
import "./bookAppointment.css"






function BookAppointment(){
   const [alertitem ,showalertitm] = useState(false);
   const userid = useSelector((state)=> state.users.user.id)
   const navigate = useNavigate();
   const handleClick = ()=>{
      if(userid !== undefined){
         navigate("booking1/1")
      }
      else {
         showalertitm(true);
        
         setTimeout( ()=>  navigate("/login") , 5000) ;
         
      }
   }

    return(
      <div className="z-20" > 
    <div className="relative h-screen " style={{fontFamily: 'Poppins, sans-serif'}}>
     { alertitem &&  <Alert severity="info">You should log in First to Book an Appointment  </Alert> }
    
        <img src ={bacgroundImg} alt="BackGround" className="absolute top-0 left-0 z-0 bg-cover   " />
         <div className="z-10 w-6/12 translate-y-1/3  translate-x-2/3 "  >
            <img src ={Mainimg} alt="iltration" className="imgsofa" />
         </div>
         <div className=" absolute top-28  left-40">
            <p className="paragraph">We Are Here To</p>
            <p className="paragrapHelp">Help</p>
            <button type="button" onClick={handleClick} className="text-xl md:text-lg  lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white ">BOOK AN APPOINTMENT</button>
         </div>
        
         


    </div>
    </div>


    )
}

export default BookAppointment ;