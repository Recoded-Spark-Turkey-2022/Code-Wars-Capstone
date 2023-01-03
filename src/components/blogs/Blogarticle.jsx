import React from 'react';

 function Blogarticle ({id,src,header,header1,paragraph,paragraph2,paragraph3,paragraph4}) {

  return (
    <div id={id}>
<img  className=" flex justify-center items-center rounded-xl p-12 w-12/24 h-4/12"  src={src} alt="article"/>
<div className=" inline-flex flex-col space-y-9 justify-start p-3 ml-10" >
<h1 className=" text-5xl uppercase " >{header}</h1>
<p className="text-xl font-light leading-loose uppercase" style={{width: 1000,}} >{paragraph}</p>
<h4 className="text-3xl uppercase">{header1}</h4>
<p className="text-xl font-light leading-loose uppercase" style={{width: 1000,}}>{paragraph2}</p>
<p className="text-xl font-light leading-loose uppercase" style={{width: 1000,}}>{paragraph3}</p>
<p className="text-xl font-light leading-loose uppercase" >{paragraph4}</p>
</div>
<div className="inline-flex flex-col ml-10 space-y-6 items-start justify-start pt-5" style={{width: 1000, height: 175}}>
    <p className="text-3xl uppercase ">Sign up for The Healing blog</p>
    <p className="text-xl uppercase ">A weekly, ad-free Blog that helps you stay in the know.</p>
    
</div>
    </div>
  )
}

export default Blogarticle;