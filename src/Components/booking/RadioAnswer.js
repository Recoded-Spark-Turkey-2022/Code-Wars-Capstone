


const RadioAnswer = ({choices , selectedValue , setSelectedValue}) => {
  


  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setSelectedValue(name);
  };



      const answers =  choices.map((obj )=>{
            return (
                <>
              <label   >
              <input
                type="Radio"
                name= {obj}
                key = {`value${obj}`}
                checked={selectedValue === obj}
                onChange={handleCheckboxChange}
                className = "mb-3"
              />
              {obj}
            </label>
            <br />
            </>

            )


      })
      
  return (
    <div className="" >
      {answers}
    </div>
  );
};

export default RadioAnswer;


