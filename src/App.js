import React, { useState } from 'react';
import Timer from './Components/Timer';

const App = () => {

  const[isActive, setIsActive]=useState(false);
   const[name, setName]=useState('');
  const handleChange = (event)=>{
     setName(event.target.value);
  }
   
  const changeClass = () => {
      setIsActive(!isActive)
  }

  return (

    <>
               <h1>my name is {isActive && name}</h1>
               <input type='text'placeholder='name is' 
               value={name} onChange={handleChange}/>

      <button className={isActive && 'active-class' } 
      onClick={changeClass}>
        click here
      </button>


    <Timer/>

    </>
  )


}
export default App;