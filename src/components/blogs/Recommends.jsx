import React from "react"
import { Link } from "react-router-dom"
import second from "./2nd.jpg"
import third from "./3rd.jpg"
import first from "./1st.jpg"

function Recommends (){

    return(
    <>
        <Link to="/blog2"> <img src={second} alt="second"  />  </Link>
        <Link to="/blog3"> <img src={third} alt="third"  />  </Link>
        <Link to="/blog"> <img src={first} alt="first"  />  </Link>
    </>
    )
}
export default Recommends   
