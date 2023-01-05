import React from "react"
import {  useNavigate } from "react-router-dom"
import BlogData from "./Blogdata"

function Recommends ({id}){

    const blogs = BlogData.filter(blog =>  blog.id !== id);
    
    const navigate = useNavigate();
    const handleBlog1 =(e)=>{
        e.preventDefault();
     return   navigate(`/blog/${blogs[0].id}`)

    }
    const handleBlog2 =(e)=>{
        e.preventDefault();
        return   navigate(`/blog/${blogs[1].id}`)
    }


    return(
    <div className="ml-12 w-[75rem] h-[35rem] pt-[10rem] "   >
            <p className=" text-3xl uppercase ">Recommended for you</p>
            <div className="flex space-x-1">
        <button  type="submit" onClick={handleBlog1} className="pt-10 rounded  w-[70rem] h-[35rem]"  > <img src={blogs[0].src} alt="second"  />  </button>
        <button type="submit" onClick={handleBlog2} className="pt-10 rounded w-[70rem] h-[35rem]"  > <img src={blogs[1].src} alt="third"/>  </button>
        </div>
        </div>
    )
}
export default Recommends   
