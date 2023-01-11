import React from "react"

function TeamCard ({image,name,position}){

 
    return(
        
        <div className=" h-full bg-cyan-50  rounded-[2rem] overflow-hidden shadow-lg  xl:w-[13rem] lg:w-1/1 sm:w-1/1" >
        <img className=" w-full " src={image} alt="team"/>
        <div className="px-6 py-4 ">
        <h2 className=" flex justify-center font-bold text-l mb-2 lg:w-[10rem] leading-10 text-gray-700">{name}</h2>
        <h3 className="text-gray-700 text-base leading-10 flex justify-center lg:w-[10rem]" >{position}</h3>
        </div>
        </div>
   
    )
}
export default TeamCard   
