import { useState } from 'react'
import './App.css'
function App() {
  const [color ,  setColor] = useState("#0f172a")
  return (
    <>
    <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='fixed w-full top-4 flex flex-wrap justify-center px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
           <button onClick={()=>{setColor("red")}} className='px-4 bg-[red] text-white py-2 rounded-lg '>Red</button>
           <button onClick={()=>{setColor("green")}} className='px-4 bg-[green] text-white py-2 rounded-lg '>Green</button>
           <button onClick={()=>{setColor("blue")}} className='px-4 bg-[blue] text-white py-2 rounded-lg '>Blue</button>
           <button onClick={()=>{setColor("orange")}} className='px-4 bg-[orange] text-white py-2 rounded-lg '>Orange</button>
           <button onClick={()=>{setColor("black")}} className='px-4 bg-[black] text-white py-2 rounded-lg '>Black</button>
           <button onClick={()=>{setColor("#0f172a")}} className='px-4 bg-[#0f172a] text-white py-2 rounded-lg '>Default</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
