import React from 'react';

 function Blogarticle ({id,src,header,header1,paragraph,paragraph2,paragraph3,paragraph4}) {

  return (
    <div id={id}>
<img  className="rounded-xl inline-flex text-align: left;" style={{width: 1116, height: 530,}} src={src} alt="article"/>
<div className=" inline-flex flex-col space-y-9 items-center justify-start" style={{width: 1002, height: 1129,}} >
<h1 className="text-5xl uppercase text-start " >{header}</h1>
<p className="text-xl font-light leading-loose uppercase" style={{width: 1002,}} >{paragraph}</p>
<h4 className="text-3xl uppercase">{header1}</h4>
<p className="text-xl font-light leading-loose uppercase">{paragraph2}</p>
<p className="text-xl font-light leading-loose uppercase">{paragraph3}</p>
<p className="text-xl font-light leading-loose uppercase">{paragraph4}</p>
  <h3  className="text-3xl uppercase" >Sign up for The Healing blog</h3>
  <p className="text-xl uppercase">A weekly, ad-free Blog that helps you stay in the know.</p>
</div>
<h3 className="absolute left-0 top-0 text-3xl uppercase" >Recommended for you</h3>
    </div>
  )
}

export default Blogarticle;