const HeaderBooking=({Header , par})=> {
    return (

        <div style={{fontFamily: 'Poppins, sans-serif'}}><h1 className="lg:text-5xl md:text-2x sm:text-lg mt-10  lg:ml-20 md:ml-10 uppercase " > {Header} </h1>
        <p className='lg:tex-xl md:text-xl text-stone-500 sm:text-base lg:ml-20 mb-6 md:ml-10 w-9/12 '> {par}</p></div>
    )
}

export default HeaderBooking ;