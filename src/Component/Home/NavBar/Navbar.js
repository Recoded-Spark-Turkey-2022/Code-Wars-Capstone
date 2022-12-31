import { useState ,React  } from "react";
import Image from "./Logo.svg"

 function Navebar (){
const [title , setTitle] = useState('');

return (
     <nav  className="bg-cyan-50 px-2 sm:px-4 py-2.5 rounded  z-10 ">
        
           <img src={Image} alt="logo" className=" h-5 w-5 mt-2 ml-2"  />
           <h1 className="absolute top-3 left-14  text-xl">Healing</h1>
       
             <div className="absolute top-2 right-14">
             <div className="    flex justify-around text-sm">
             <a href="#Home" className=" hover:text-orange-300 mr-4 mt-2" >Home</a>
             <a href="#Blogs" className=" hover:text-orange-300 mr-2  mt-2">Blogs</a>
             <div><select value={title} onChange = { (e)=> setTitle(e.target.value) } className=" text-center bg-cyan-50 hover:text-orange-300 mr-1 mt-2 w-16 h-5">
                   <option selected value="about" >About</option>
                   <option value="about page" >About Page</option>
                   <option value="team page">Team Page</option>
                   <option value="carees page">Carees Page</option>
               </select></div>
             <a href="#Contact Us" className=" hover:text-orange-300 ml-2 mt-2">Contact Us</a>
             <a href="#Loge In" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-3 mt-1">Log In</a>
             </div>   
             </div>
        
     </nav>

);
}
export default Navebar;