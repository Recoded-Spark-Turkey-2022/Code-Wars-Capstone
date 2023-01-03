import React from 'react';

 function Blogarticle ({id,src,header,header1,paragraph,paragraph2,paragraph3,paragraph4}) {

  return (
    <div id={id}>
<img  className=" flex justify-center rounded-xl p-10 w-[70rem] h-[35rem]"  src={src} alt="article"/>
<div className=" inline-flex flex-col space-y-9 justify-start p-3 ml-10 w-[60rem]" >
<h1 className=" text-5xl uppercase " >{header}</h1>
<p className="text-xl font-light leading-loose uppercase" >{paragraph}</p>
<div className='pt-[2rem]'>
<h4 className="text-2xl uppercase pb-[1rem] "  >{header1}</h4>
<p className="text-xl font-light leading-loose uppercase" >{paragraph2}</p>
<p className="text-xl font-light leading-loose uppercase">{paragraph3}</p>
<p className="text-xl font-light leading-loose uppercase"  >{paragraph4}</p>
</div>
</div>
<div className=" ml-12 space-y-3 pt-3" style={{width: 1000, height: 100}}>
    <p className="text-3xl uppercase ">Sign up for The Healing blog</p>
    <p className="text-xl uppercase ">A weekly, ad-free Blog that helps you stay in the know.</p>

    
</div>
    </div>
  )
}

export default Blogarticle;