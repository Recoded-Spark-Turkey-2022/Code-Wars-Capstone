import React from "react"
import { Link } from "react-router-dom"
import second from "./2nd.jpg"
import third from "./3rd.jpg"
import first from "./1st.jpg"

function Recommends (){

    return(
    <div  className="relative flex items-start justify-start " style={{width: 1115, height: 400,}}  >
        <Link className="flex items-start justify-start pl-1 pr-10 pt-1 pb-5 rounded" style={{width: 546, height: 320,}} to="blog2"> <img src={second} alt="second"  />  </Link>
        <Link className="flex items-start justify-start pl-1 pr-10 pt-1 pb-5 rounded" style={{width: 546, height: 320,}} to="blog3"> <img src={third} alt="third"  />  </Link>
        <Link className="flex items-start justify-start pl-1 pr-10 pt-1 pb-5 rounded" style={{width: 700, height: 400,}}  to="blog1"> <img src={first} alt="first"  />  </Link>
        </div>
    )
}
export default Recommends   
