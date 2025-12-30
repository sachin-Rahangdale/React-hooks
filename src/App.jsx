import React, { useState } from 'react'
import './App.css'
const App = () =>{

  let [counter, setCounter]= useState(0);
  function increaseCounter(){
    setCounter(counter = counter + 1)
    console.log(counter);
  }
  function decreaseCounter(){
    setCounter(counter = counter -1)
    console.log(counter);
  
  }

  return (
    <>
    <button onClick={increaseCounter}> click me ++ </button><p></p>
    {counter}
    <button onClick={decreaseCounter}> click me -- </button>
    
     
    </>
  )
}

export default App
