import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment , incrementByValue } from '../features/showSlice'

const SubChild_1 = () => {
  const data = useSelector((e)=>{
    // console.log(e.show.value)
    return e.show.value
  })  
  const dispatch = useDispatch()

  return (
    <>
      <div>SubChild_1 : {data}</div>
      <button onClick={()=>{dispatch(increment())}}> click me</button>
      <button onClick={()=>{dispatch(incrementByValue(10))}}> increase by value </button>
    </>
  );
}

export default SubChild_1