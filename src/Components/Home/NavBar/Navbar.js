
import { useState ,React  } from "react";
import { useNavigate , Link } from "react-router-dom";
import { useSelector } from 'react-redux';



import Image from "./Logo.svg"



 function Navebar (){
const [title , setTitle] = useState('');
const Navigate = useNavigate();
const userInfo  = useSelector((state)=> state.users.user)
const {userlogin} = useSelector((state)=> state.users)

const HandleLogin = (e)=>{
  e.preventDefault();
  return Navigate(
    "/login")
}
console.log(userInfo);
console.log(userlogin );

return (
     <nav style={{fontFamily: 'Poppins, sans-serif'}} className="bg-cyan-50 px-2 sm:px-4 py-2.5 rounded  z-10 ">
        
           <img src={Image} alt="logo" className=" h-5 w-5 mt-2 ml-6"  />
           <h1 className="absolute top-3 left-16  text-xl">Healing</h1>
       
             <div className="absolute top-2 right-14">
             <div className="    flex justify-around text-sm">
             <Link to="/" className=" hover:text-orange-300 mr-4 mt-2" >Home</Link>
             <Link to="/blog/1" className=" hover:text-orange-300 mr-2  mt-2">Blogs</Link>
             <div><select value={title} onChange = { (e)=> setTitle(e.target.value) } className=" text-center bg-cyan-50 hover:text-orange-300 mr-1 mt-2 w-16 h-5">
                   <option selected value="about" >About</option>
                   <option value="about page" >About Page</option>
                   <option value="team page">Team Page</option>
                   <option value="carees page">Carees Page</option>
               </select></div>
             <a href="#Contact Us" className=" hover:text-orange-300 ml-2 mt-2">Contact Us</a>
             <button type="submit" onClick={HandleLogin} className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ">{userlogin ? userInfo.name :"login" }</button>
             

             
             </div>   
             </div>
        
     </nav>

);
}
export default Navebar;