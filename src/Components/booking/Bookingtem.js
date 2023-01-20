import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderBooking from './HeaderBooking';
import { MutipleChoose } from './bookingData';


const Bookingtem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const QustionPages = MutipleChoose.filter((obj) => obj.id === id);
  const answersarray = QustionPages[0].answer;
  const [selected, setSelected] = useState(null);
  const [answer, setanswer] =useState();
  
  const handlegettingvalue = (e, index) => {
    setSelected(index);
    setanswer(e.target.value);
  
};

console.log(answer)


  const handleClick = () => {
    const nextId = parseInt(id, 10) + 1;
    if (nextId <= 3) {
      navigate(`/booking1/${nextId}`);
    } else navigate('/booking2/1');
  };


  const answers = answersarray.map((obj, index) => {
    return (
      <button
        onClick={(e) => handlegettingvalue(e , index)}
        value={obj}
        name={obj}
        type="submit"
        className={`pl-[1rem] text-xl p-1 text-center capitalize flex items-center lg:w-[30rem] md:w-[20rem] sm:w-[10rem] h-[3.5rem] transition-all duration-500 hover:bg-cyan-500 bg-white border-2 rounded-md border-gray-150   ${selected === index ? 'bg-cyan-500' :''}`}
      >
        {obj}
      </button>
    );
  });

  return (
    <div>
      <HeaderBooking
        Header=" let's match you with the right therapist"
        par="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you 
        with the most suitable therapist for you."
      />
      <div className=" grid justify-items-center">
        <div className=" flex-col lg:w-[35rem] md:w-[30rem] md:w-[25rem] space-y-8 px-10 pt-8 pb-[2rem] bg-white shadow-lg rounded">
          <h1 className="text-3xl capitalize">{QustionPages[0].Qustion}</h1>
          <div>{answers}</div>
          <button
            onClick={handleClick}
            className="inline-block align-bottom uppercase md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white"
            type="submit"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookingtem;


