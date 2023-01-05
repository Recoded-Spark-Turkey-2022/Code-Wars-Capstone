import React from "react"
import {  useNavigate } from "react-router-dom"
import second from "./2nd.jpg"
import third from "./3rd.jpg"


function Recommends (){
    const navigate = useNavigate();
    const handleBlog2 =(e)=>{
        e.preventDefault();
     return   navigate(`/blog2`)

    }

    const handleBlog3 =(e)=>{
        e.preventDefault();
     return   navigate(`/blog3`)
    }
    return(
    <div className="ml-12 w-[75rem] h-[35rem] pt-[10rem] "   >
            <p className=" text-3xl uppercase ">Recommended for you</p>
            <div className="flex space-x-1">
        <button  type="submit" onClick={handleBlog2} className="pt-10 rounded  w-[70rem] h-[35rem]"  to="blog2"> <img src={second} alt="second"  />  </button>
        <button type="submit" onClick={handleBlog3} className="pt-10 rounded w-[70rem] h-[35rem]"  to="blog3"> <img src={third} alt="third"/>  </button>
        </div>
        </div>
    )
}
export default Recommends   
