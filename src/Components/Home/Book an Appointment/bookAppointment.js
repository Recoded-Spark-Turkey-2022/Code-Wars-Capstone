import bacgroundImg from "./Images/BackGround.png"
import Mainimg from "./Images/Towperson.svg"
import "./bookAppointment.css"




function BookAppointment(){

    return(
    <div className="relative h-screen " style={{fontFamily: 'Poppins, sans-serif'}}>
      <p> </p>
        <img src ={bacgroundImg} alt="BackGround" className="absolute top-0 left-0 z-0 bg-cover   " /> 
         <div className="z-10 w-6/12 translate-y-1/3  translate-x-2/3 "  >
            <img src ={Mainimg} alt="iltration" className="imgsofa" />
         </div>
         <div className=" absolute top-28  left-40">
            <p className="paragraph">We Are Here To</p>
            <p className="paragrapHelp">Help</p>
            <a href="#Loge In" className="text-xl md:text-lg  lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white ">BOOK AN APPOINTMENT</a>
         </div>
        
         


    </div>
      


    )
}

export default BookAppointment ;