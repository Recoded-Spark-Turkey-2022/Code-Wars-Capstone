import React from 'react'
import HeaderBooking from '../booking/HeaderBooking';

export default function Careers() {
  return (
    <div>
    <HeaderBooking Header ="CAREERS AT HEALING" par="Be a part of making people feel better."/>
    <div className=" inline-flex flex-col space-y-24 items-start justify-end mt-[5rem] sm:text-base lg:ml-20 mb-6 md:ml-10 w-8/12 tracking-wider      " style={{fontFamily: 'Poppins, sans-serif'}} >
    <p className="text-xl leading-relaxed text-gray-700 " >Our SEO software cuts through mountains of data to surface critical insights. We build and maintain systems that process massive amounts of data (we&apos;re talking 36 trillion records per day and multiple petabytes of storage.) We model transparent and empathetic marketing for the world. We educate our community, making every effort to help them improve their skill. And we do it all by fostering a culture that encourages accountability, empathy, and transparency.</p>
    <div className="flex flex-col space-y-6 items-center justify-end ">
        <p className=" h-9 text-lg leading-relaxed text-center text-gray-700">What role will you play?</p>
        <div className="w-full h-1/2">
          
                <button className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white" type='submit'>SEE OUR OPEN LIST</button>
           
        </div>
    </div>
</div>
</div>  
  )
}
