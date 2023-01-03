import React from "react"
import { Link } from "react-router-dom"
import second from "./2nd.jpg"
import third from "./3rd.jpg"


function Recommends (){

    return(
    <div className="ml-12 w-[75rem] h-[35rem] pt-[10rem] "   >
            <p className=" text-3xl uppercase ">Recommended for you</p>
            <div className="flex space-x-1">
        <Link className="pt-10 rounded  w-[70rem] h-[35rem]"  to="blog2"> <img src={second} alt="second"  />  </Link>
        <Link className="pt-10 rounded w-[70rem] h-[35rem]"  to="blog3"> <img src={third} alt="third"/>  </Link>
        </div>
        </div>
    )
}
export default Recommends   
