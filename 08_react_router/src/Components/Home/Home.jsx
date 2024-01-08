import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [Count , setCount] = useState(0)
  const navigate = useNavigate()

  const countClick =()=>{
    setCount(Count+1)
  }

  const navigateHandler =()=>{
    if (Count===5) {
      navigate("/Contact")
    }else{
      alert("sorry u can't visit")
    }
  }

  return (
    <div className="fixed top-[30%] left-[35%]">
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Home Page
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
        you can to other page by clicking on the option which are in navbar
        </p>
        <button onClick={navigateHandler} className='bg-blue-400 p-3 mt-3 mr-3 rounded-lg text-white'>Go To Contact Page</button>
        <button onClick={countClick} className='bg-blue-400 p-3 mt-3 rounded-lg text-white'>Count is {Count}</button>
      </div>
    </div>
  )
}
