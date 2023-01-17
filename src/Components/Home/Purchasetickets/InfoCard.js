export default function InfoCard() { 
const buttonHanler = (e)=>{
    e.preventDefault();
}

    return (
        <div>
            <div className='flex flex-col shadow-lg  p-10  text-center rounded-lg w-9/12 lg:ml-40 md:ml-20 mb-20  '>
        <h1 className=' lg:text-5xl md:text-2xl	sm:text-sm  lg:pt-8 md:pt:6 sm:pt:4 ' >Are you a counselor? </h1>
        <p className='lg:text-1xl md:text-xl	sm:text-sm text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   lg:pb-6 md:pb:4 sm:pb:2 '>
         Interested in joining our mental health platform? You decide your schedule and how much you want to work, 
        we’ll take care of the client referrals and billing details!</p>
        <button type="submit" className='lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border py-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white w-2/6 m-auto ' onClick={buttonHanler} > Purchase </button>

   </div>
        </div>   
    )
}