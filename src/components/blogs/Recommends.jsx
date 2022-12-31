import React from "react"
import { Link } from "react-router-dom"
import second from "./2nd.jpg"
import third from "./3rd.jpg"

function Recommends (){

    return(
    <>
        <Link to="/blog1"> <img src={second} alt="second"  />  </Link>
        <Link to="/blog2"> <img src={third} alt="third"  />  </Link>
         
    </>
    )
}
export default Recommends   
