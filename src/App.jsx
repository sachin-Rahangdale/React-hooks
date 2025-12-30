import React, { useState } from 'react'
import './App.css'
import Form from './Component/Form';
import Todo from './Component/Todo';
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
  {show && (
    <div
      style={{
        width: "300px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #34d399, #10b981)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <button
        onClick={() => increaseCounter(5)}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        ➕ Increase
      </button>

      <h1 style={{ color: color, margin: "15px 0" }}>{counter}</h1>

      <button
        disabled={counter === 0 || counter - 10 <= 0}
        onClick={() => decreaseCounter(10)}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "10px",
          opacity: counter === 0 || counter - 10 <= 0 ? 0.5 : 1,
        }}
      >
        ➖ Decrease
      </button>

      <button
        onClick={reset}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: "#ef4444",
          color: "#fff",
        }}
      >
        🔄 Reset
      </button>
    </div>
  )}

  {/* Toggle Button */}
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <button
      onClick={() => setShow(!show)}
      type="button"
      style={{
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#6366f1",
        color: "#fff",
        fontWeight: "bold",
      }}
    >
      {show ? "Hide Counter" : "Show Counter"}
    </button>
  </div>

  {/* Color Input */}
  <div style={{ textAlign: "center", marginBottom: "30px" }}>
    <input
      type="text"
      placeholder="Enter a valid color (red, blue...)"
      onChange={onInputChange}
      style={{
        padding: "10px",
        width: "250px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
      }}
    />
  </div>

  {/* Form Component */}
  <Form />
  <Todo/>
</>
  )
}

export default App
