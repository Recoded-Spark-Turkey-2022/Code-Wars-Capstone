import React from 'react';

 function Blogarticle ({id,imageUrl,header,header1,paragraph,paragraph2,paragraph3,paragraph4}) {

  return (
    <div id={id}>
<img src={imageUrl} alt="article"/>
<div>
<h1>{header}</h1>
<p>{paragraph}</p>
</div>
<div>
<h4>{header1}</h4>
<p>{paragraph2}</p>
</div>
<div>
<p>{paragraph3}</p></div>
<div>
<p>{paragraph4}</p></div>

<div>
  <h3>Sign up for The Healing blog</h3>
  <p>A weekly, ad-free Blog that helps you stay in the know.</p>
</div>
<h3>Recommended for you</h3>
    </div>
  )
}

export default Blogarticle;