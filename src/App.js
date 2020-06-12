import React, {useState} from 'react';
import './App.css';
import Message from './message'

function App() {
  let [count, setCount] = useState(0)  
  let [isMorning , setMorning] = useState(true) 
  return (
    <div className={`box ${isMorning ? 'dayLight': ''}`}>
      
  <button className='mode' onClick={()=>setMorning(!isMorning)}> Mode: {isMorning ? "Dark Mode" : "Light Mode"}</button>

      <h3><Message counter={count}/> </h3>

      {/* <h1> Day time = {isMorning ? 'morning' : 'Night'} </h1> */}
      <button className='substract' onClick={()=>setCount(--count)}>-</button>
      <button className='Add' onClick={()=>setCount(++count)}>+</button>
      <br/>
      <button className='reset' onClick={()=>setCount(0)}> Reset</button>


    </div>
    
  );
}

export default App;
