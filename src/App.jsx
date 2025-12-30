import React, { useState } from 'react'
import './App.css'
const App = () =>{

  const [show, setShow] = useState(true);
  let [counter, setCounter]= useState(0);
  const [color,setColor]=useState('white');
  function increaseCounter(num){
    setCounter(counter = counter + num)
    console.log(counter);
    setColor('blue');
  }
  function decreaseCounter(num){
    setCounter(counter = counter -num);
    console.log(counter);
    setColor('red')
  }
  const reset=()=>{
    setCounter(counter = 0);
    console.log(counter);
  }
  const onInputChange=(ele)=>{
    console.log(ele);
    setColor(ele.target.value);
  }


  return (
    <>
    {show &&
    <div style={{backgroundColor:'green', margin:'10px',marginRight:'70%', padding :'10px'}}>
      <button onClick={()=>increaseCounter(5)} > click me ++ </button><p></p>
    {/* when we dont have parameter we can only use name of function without () */}
    <h1 style={{color : color}}>{counter}</h1>
    
    <button disabled={counter ==0 || counter - 10 <= 0 } onClick={()=>decreaseCounter(10)}> click me -- </button>
    {/*this is how we pass parameter in function we use ()=> */}

    <button onClick={reset}> Reset to Zero </button>
    </div>
    
}

    <button onClick={()=> setShow(!show)} 
    type='button'
     >{show ? 'Hide': 'Show'}</button>
     <input type='text' onChange={onInputChange}/>
  
    </>

  )
}

export default App
