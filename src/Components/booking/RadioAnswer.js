import React, { useState  } from 'react';


const RadioAnswer = ({choices}) => {
  const [selectedValue, setSelectedValue] = useState('');
  console.log(choices)

  const handleCheckboxChange = (event) => {
    console.log(event.target.name)
    const { name } = event.target;
    setSelectedValue(name);
  };

  /* {choices.map((choice) => (
        <label> <input type='radio' className='text-3xl text-black text-opacity-90 capitalize mr-3 shadow-lg' value={choice}/>{choice}</label>
      ))} */

      const answers =  choices.map((obj )=>{
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


