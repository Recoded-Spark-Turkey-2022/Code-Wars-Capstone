import React from 'react'
import { useParams } from 'react-router-dom';
import Bookingtem from './Bookingtem'



function Booking() {
 const { id } = useParams();
  return (
    <div id={id} ><Bookingtem question="What type of coumseling are you looking for?" choices={[
        "Individual counseling","Teen counseling (for my child)"
    ]}/></div>
  )
}

export default Booking