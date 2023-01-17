
import { useState ,React  } from "react";
import { useNavigate , Link } from "react-router-dom";



import Image from "./Logo.svg"



 function Navebar (){
const [title , setTitle] = useState('');
const Navigate = useNavigate();

const HandleLogin = (e)=>{
  e.preventDefault();
  return Navigate(
    "/login")
}

const onclicklogo = ()=>{
  return Navigate(
    "/")
}

return (
     <nav style={{fontFamily: 'Poppins, sans-serif'}} className="bg-cyan-50 px-2 sm:px-4 py-2.5 rounded  z-10 ">
        
        <button type="submit" onClick={onclicklogo}> <img src={Image} alt="logo" className=" h-9 w-9 mt-2 ml-6"  /></button>
        <Link to="/"> <h1 className="absolute top-4 left-[5.5rem]  text-3xl" >Healing</h1> </Link>
       
             <div className="absolute top-3.5 right-14 ">
             <div className="    flex justify-around text-l space-x-10">
             <Link to="/" className=" hover:text-orange-300 mr-4 mt-2" >Home</Link>
             <Link to="/blog/1" className=" hover:text-orange-300 mr-2  mt-2">Blogs</Link>
             <div ><select value={title} onChange = { (e)=> setTitle(e.target.value) } className=" text-center bg-cyan-50 hover:text-orange-300 mr-1 mt-2 w-16 h-5">
                   <option selected value="about" >About</option>
                   <option value="about page" >About Page</option>
                   <option value="team page">Team Page</option>
                   <option value="carees page">Carees Page</option>
               </select></div>
             <a href="#Contact Us" className=" hover:text-orange-300 ml-2 mt-2">Contact Us</a>
             <button type="submit" onClick={HandleLogin} className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ">Login</button>
             

             
             </div>   
             </div>
        
     </nav>

);
}
export default Navebar;