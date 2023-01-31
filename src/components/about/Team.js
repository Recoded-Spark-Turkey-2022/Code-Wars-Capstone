import React from "react"
import TeamCard from "./Teamcard"
import naji from "./naji.jpg"
import nour from "./nour.jpg"
import mohammed from "./mohammed.jpg"
import furkan from "./furkan.jpg"
import sena from "./sena.jpg"

function Team (){

    return(
      <div >
        <h1 className="text-4xl md:text-3xl sm:text-3xl p-[4rem] md:p-[4rem] pl-[7rem] lg:pb-[8rem] ">WE ARE HEALING, NICE TO MEET YOU!</h1>
        <div className=" ">
       <h4 className="pl-[7rem] pb-[3rem]   text-3xl leading-10 text-gray-700">Meet the Team!</h4> 
    <div className=" pl-[7rem] pb-[5rem] pr-[6rem] grid lg:grid-cols-5 md:grid-cols-3 .grid-cols-5 gap-3">
      <TeamCard image={mohammed} name="Muhammed Mustafa" position="Front-end Developer" />
      <TeamCard image={naji} name="Naji AlHusami" position="Front-End Developer" />
      <TeamCard image={nour} name="Nour Al Maleh" position="Front-End Developer"/>
      <TeamCard image={sena} name="Sena Sezer" position="Front-End Developer"/>
      <TeamCard image={furkan} name="Furkan Akkaya" position="Front-End Developer"/>
      </div>
      </div>
      </div>
    )
}
export default Team   
