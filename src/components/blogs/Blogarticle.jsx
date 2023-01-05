import { useParams } from 'react-router-dom';
import React from 'react';
import BlogData from "./Blogdata"
import Subscribeform from "./Subscribe";
import Recommends from "./Recommends";
import first from "./1st.jpg"
import second from "./2nd.jpg"
import third from "./3rd.jpg"


 function Blogarticle () {
  
let imageurl ;
  const { id } = useParams();

  const filteredProducts = BlogData.filter(blog => blog.id === id);    
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

  
    
    <div id={id } >
<img  className=" flex justify-center rounded-xl p-10 w-[60rem] h-[35rem]"  src={imageurl} alt="article"/>
<div className=" inline-flex flex-col space-y-9 justify-start p-3 ml-10 w-[60rem]" >
<h1 className=" text-5xl uppercase " >{filteredProducts[0].header}</h1>
<p className="text-xl font-light leading-loose uppercase" >{filteredProducts[0].paragraph}</p>
<div className='pt-[2rem]'>
<h4 className="text-2xl uppercase pb-[1rem] "  >{filteredProducts[0].header1}</h4>
<div className=" pb-[1rem] text-xl font-light leading-loose uppercase">
<p >{filteredProducts[0].paragraph2}</p>
<p >{filteredProducts[0].paragraph3}</p>
<p >{filteredProducts[0].paragraph4}</p>
</div>
</div>
</div>
<div className=" ml-12 space-y-3 pt-3" style={{width: 1000, height: 100}}>
    <p className="text-3xl uppercase ">Sign up for The Healing blog</p>
    <p className="text-xl uppercase ">A weekly, ad-free Blog that helps you stay in the know.</p>
</div>
     <Subscribeform/>
     <Recommends id={id}/>

    
    </div>
  )
}

export default Blogarticle;