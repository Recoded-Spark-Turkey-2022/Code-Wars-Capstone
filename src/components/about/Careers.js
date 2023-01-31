import React, { useState } from 'react';

import HeaderBooking from '../booking/HeaderBooking';

export default function Careers() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      <HeaderBooking
        Header="CAREERS AT HEALING"
        par="Be a part of making people feel better."
      />
      <div
        className=" inline-flex flex-col space-y-24 items-start justify-end mt-[5rem] sm:text-base ml-20  mb-6 md:ml-10 w-8/12 tracking-wider      "
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <p className="text-xl leading-relaxed text-gray-700 ">
          Our SEO software cuts through mountains of data to surface critical
          insights. We build and maintain systems that process massive amounts
          of data (we&apos;re talking 36 trillion records per day and multiple
          petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help
          them improve their skill. And we do it all by fostering a culture that
          encourages accountability, empathy, and transparency.
        </p>
        <div className="flex flex-col space-y-6 items-center justify-end ">
          <p className=" h-9 text-lg leading-relaxed text-center text-gray-700">
            What role will you play?
          </p>
          <div className="w-full h-1/2">
            <button
              onClick={() => setShowContent(!showContent)}
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
              type="submit"
            >
              SEE OUR OPEN LIST
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-52 py-5 bg-amber-200 text-left">
        <div className="inline-flex flex-col   p-[1rem]">
          <p className="text-5xl text-left  leading-10 text-gray-700 p-[1rem]">
            OUR HIRING PHILOSOPHY
          </p>
          <p className="text-xl leading-normal text-gray-700 p-[1rem]">
            To build the very best SEO tools, we need a workforce that reflects
            the diversity of our communities and customers. We want Online
            Therapy to be a place where everyone feels welcome and engaged, bar
            none. It&apos;s our mission and promise to interview a diverse and
            representative slate of candidates before making an offer for our
            open roles.
          </p>
        </div>
      </div>
          {showContent && (
           <div className=' bg-blue'>
           <HeaderBooking     Header="CURRENT OPEN POSITIONS"
        par="Please send us an email with the application title as the subject with an attached CV in PDF format!"/>
            <div className='lg:flex flex-row justify-between lg:w-[80rem] sm:w-[60rem] pr-[7rem] p-[1rem] pl-20 '>
               
    <div className=" bg-gray-800 " />
    <div>
    <a href="http://example.com" className=" text-3xl text-cyan-400 hover:text-black visited:text-black-200 " >Senior Software Developer | Backend | Remote in the USA</a>
    <p className="text-xl text-gray-700" >Moz is looking for a Senior Software Developer to join our Application Development team.</p></div>
    <div className="">
    <p className=" text-3xl  text-cyan-400 hover:text-black" >Engineering</p>
    <p className=" text-xl text-gray-700" >Application Development</p>
    </div>
</div>
{/* <div className='bg-gray-500 h-[0.1rem]'/> */}

</div>

          )}
    </div>
  );
}
