import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import BlogData from "./Blogdata"
import 'react-multi-carousel/lib/styles.css';
import "./Slider.css"
/* import first from "./1st.jpg"
import second from "./2nd.jpg"
import third from "./3rd.jpg" */



function ImageCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
const imagesilder = BlogData.map((obj) => (
  
 <Link className='bl-10' to={`blog/${obj.id}`} key={obj.id}>
   <img src={obj.src} alt={obj.alt} />
 </Link>
 
))
  return (
<div className='bg-cyan-50 ' >
  <p className='lg:ml-40 md:ml-20 py-20 text-5xl '>
  RECENT BLOGS 
  </p>
  <Carousel
  infinite='true'  
  keyBoardControl='fasle'
  containerClass="carousel-container"
  responsive={responsive}
  
  className=" lg:ml-40 md:ml-20 w-10/12 pb-40">

  {imagesilder}

      
</Carousel>
</div>
  );
}

export default ImageCarousel;




