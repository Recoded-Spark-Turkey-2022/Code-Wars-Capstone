const HeaderBooking=({Header , par})=> {
    return (

        <div style={{fontFamily: 'Poppins, sans-serif'}}><h1 className="pb-[0.5rem] text-[2.6rem] tracking-wider md:text-2x sm:text-lg mt-10 mb-2 ml-20 md:ml-10 uppercase " > {Header} </h1>
        <p className='tex-xl md:text-xl text-stone-500 sm:text-base ml-20 mb-6 md:ml-10 w-8/12 tracking-wider '> {par}</p></div>
    )
}

export default HeaderBooking ;