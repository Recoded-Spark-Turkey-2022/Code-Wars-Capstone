import React from "react"
import {  useNavigate } from "react-router-dom"
import BlogData from "./Blogdata"

function Recommends ({id}){

    const blogs = BlogData.filter(blog =>  blog.id !== id);
    const navigate = useNavigate();

    const handleBlog1 =(e)=>{
        window.scrollTo(0, 0);
        e.preventDefault();
     return   navigate(`/blog/${blogs[0].id}`)

    }
    const handleBlog2 =(e)=>{
        window.scrollTo(0, 0);
        e.preventDefault();
        return   navigate(`/blog/${blogs[1].id}`)
  
    }


    return(
    <div className="w-[75rem] h-[35rem] xl:pt-[10rem] sm:pt-[5rem] "   >
            <p className=" 2xl:text-3xl sm:text-3xl uppercase ">Recommended for you</p>
            <div className="xl:flex space-x-4 xl:pt-[3rem] sm:pt-[5rem]">
        <button  type="submit" onClick={handleBlog1} className=" rounded  xl:w-[27rem] xl:h-[15rem]  sm:w-[30rem] sm:h-[13rem] "  > <img src={blogs[0].src} alt="second"  />  </button>
        <button type="submit" onClick={handleBlog2} className=" rounded w-[27rem] h-[15rem]"  > <img src={blogs[1].src} alt="third"/>  </button>
        </div>
        </div>
    )
}
export default Recommends   
