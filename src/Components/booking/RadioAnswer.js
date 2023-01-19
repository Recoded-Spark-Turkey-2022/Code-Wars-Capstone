import React, { useState  } from 'react';


const RadioAnswer = ({Qustion}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleCheckboxChange = (event) => {
    console.log(event.target.name)
    const { name } = event.target;
    setSelectedValue(name);
  };

  /* {choices.map((choice) => (
        <label> <input type='radio' className='text-3xl text-black text-opacity-90 capitalize mr-3 shadow-lg' value={choice}/>{choice}</label>
      ))} */

      const answers =  Qustion.map((obj )=>{
        
            return (
                <>
              <label   >
              <input
                className=' '
                type="Radio"
                name= {obj}
                key = {obj}
                checked={selectedValue === obj}
                onChange={handleCheckboxChange}
              />
              {obj}
            </label>
            <br />
            </>

            )


      })
      

  return (
    <div>
      {answers}
    </div>
  );
};

export default RadioAnswer;


