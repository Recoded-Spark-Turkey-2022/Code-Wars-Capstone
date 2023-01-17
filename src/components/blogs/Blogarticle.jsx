import { useParams } from 'react-router-dom';
import React from 'react';
import BlogData from "./Blogdata"
import Subscribeform from "./Subscribe";
import Recommends from "./Recommends";
import first from "./Images/1st.jpg"
import second from "./Images/2nd.jpg"
import third from "./Images/3rd.jpg"


 function Blogarticle () {
  
let imageurl ;
  const { id } = useParams();

  const filterbyid = BlogData.filter(blog => blog.id === id);    
  
  if( id=== "1"){
    imageurl = first
  }
  else if(id === '2'){
    imageurl = second
  }
  else {
    imageurl = third ;
  }
  return ( 
<div data-Testid="blogarticle" id={id} className=" flex flex-col justify-center items-start ml-[12rem]">
<img  className=" rounded-xl p-9 xl:w-[60rem] xl:h-[35rem] md:h-[35rem] md:w-[50rem] sm:h-[15rem] sm:w-[22rem] "  src={imageurl} alt="article"/>
<div className="space-y-9  ml-10 xl:w-[55rem]" >
<h1 className=" 2xl:text-5xl sm:text-4xl uppercase " >{filterbyid[0].header}</h1>
<p className=" 2xl:text-l sm:text-l font-light leading-loose uppercase" >{filterbyid[0].paragraph}</p>
<div className='pt-[2rem]'>
<h4 className="2xl:text-5xl sm:text-4xl  uppercase pb-[1rem] "  >{filterbyid[0].header1}</h4>
<div className=" pb-[1rem] 2xl:text-l sm:text-l font-light leading-loose uppercase">
<p >{filterbyid[0].paragraph2}</p>
<p >{filterbyid[0].paragraph3}</p>
<p >{filterbyid [0].paragraph4}</p>
</div>
</div>
</div>
<div className="pl-[2.5rem] space-y-3 pt-3 xl:w-[40rem] sm:w-[15rem] ">
    <p className="2xl:text-3xl sm:text-xl uppercase ">Sign up for The Healing blog</p>
    <p className="2xl:text-xl  sm:text-l uppercase ">A weekly, ad-free Blog that helps you stay in the know.</p>

     <Subscribeform/>
     <Recommends id={id}/>
     </div>
    
    </div>
  )
}

export default Blogarticle;