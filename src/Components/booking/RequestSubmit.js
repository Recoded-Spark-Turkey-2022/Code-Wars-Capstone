import { useNavigate } from "react-router-dom";
import HeaderBooking  from "./HeaderBooking";


const Requestsubmit = () =>{
    const navigate = useNavigate();
   const  handleClick = (e) =>{
  e.preventDefault();
  navigate("/")
    
   }
    return (
        <>
        <HeaderBooking Header="your request has been submitted!" par="You will receive an email guiding you to book a date and time soon."/>
        <div className="grid justify-items-center">
        <div className='flex flex-col shadow-xl gap-8 py-20 p-10  text-center rounded-lg w-6/12   '>
    <h1 className=' lg:text-5xl md:text-2xl	sm:text-sm  lg:pt-8 md:pt:6 sm:pt:4 ' >request submitted </h1>
    <p className='lg:text-1xl md:text-xl	sm:text-sm text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   lg:pb-6 md:pb:4 sm:pb:2 '>
    you will receive a confirmation email soon <br/> please keep an eye on your mail.</p>
    <button type="submit" onClick={handleClick} className='lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border py-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white w-2/6 m-auto '  > Back to Home </button>

</div>
    </div>   
    </>
    )
}
export default Requestsubmit ; 