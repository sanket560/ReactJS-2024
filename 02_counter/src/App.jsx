import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  const add = ()=>{
    if (counter <= 9) {
      counter = counter + 1
      setCounter(counter)
    }
  }
  const mins = ()=>{
    if (counter != 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }
  return (
    <>
    <h2>counter value : {counter}</h2>  
    <button onClick={add}>+</button> 
    <br />
    <br />
    <button onClick={mins}>-</button>    
    </>
  )
}

export default App
