import React from 'react';
import Card from "./card" ;
import InfoCard from "./InfoCard" 

function Purchasetickets () {
  return (
  < div style={{fontFamily: 'Poppins, sans-serif'}}>
  
  <p className='lg:text-5xl md:text-2xl	sm:text-lg mt-10  lg:ml-40 md:ml-20'  >  Purchase tickets</p>
  <p className='lg:tex-xl md:text-lg sm:text-sm lg:ml-40 mb-6 md:ml-20' >  PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!</p>
 


    <div className=' flex lg:gap-14  md:gap-8 sm:gap-4  flex-wrap  sm:felx-warp lg:ml-40 md:ml-20  lg:mb-20 md:mb-10 '  >    
    
   <Card className="flex-1" Header="5 TICKETS" Price = "10$"  />    
   <Card className="flex-1" Header="25 TICKETS" Price = "40$"  />
   <Card className="flex-1" Header="50 TICKETS" Price = "70$"  />
   </div>

   <InfoCard />
   </div>
  );
}

export default Purchasetickets;