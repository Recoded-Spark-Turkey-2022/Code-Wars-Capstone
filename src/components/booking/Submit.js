import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import HeaderBooking  from "./HeaderBooking";
import {BookingInfo} from "../../features/users/usersSlice"

const Submit = () => { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const answers = useSelector((state)=> state.users.SurveyAnswer);
    const handlesubmit = (e)=>{
         e.preventDefault(); 
         dispatch(BookingInfo(answers))
         navigate("/Requestsubmit")}
        
    return(
        <>
        <HeaderBooking Header="Submit your appointment" par="Click Submit if you are sure of all your choices."/>
        <div className="grid justify-items-center  bt-10">
        <div className='flex flex-col shadow-xl gap-8 py-20 p-10  text-center rounded-lg w-6/12   '>
    <h1 className=' lg:text-5xl md:text-2xl	sm:text-sm  lg:pt-8 md:pt:6 sm:pt:4 ' >Submit Appointment? </h1>
    <p className='lg:text-1xl md:text-xl	sm:text-sm text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   lg:pb-6 md:pb:4 sm:pb:2 '>
    Please be Aware That This Action Will Cost You a Ticket!</p>
    <button type="submit" onClick={handlesubmit} className='lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border py-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white w-2/6 m-auto '  > Submit </button>

</div>
    </div>   
    </>

    )
}
export default Submit; 