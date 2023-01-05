import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from './Blogdata';



function ImageCarousel() {

  return (
    <div className="image-carousel">
      {BlogData.map((obj) => (
        <Link to={`blog/${obj.id}`} key={obj.id}>
          <img src={obj.src} alt={obj.alt} />
        </Link>
      ))}
    </div>
  );
}

export default ImageCarousel;




