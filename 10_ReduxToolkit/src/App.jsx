import React from 'react'
import Child_1 from './components/Child_1';
import { useSelector } from 'react-redux';

const App = () => {
  const data = useSelector((e)=>{
    return e.show.value
  })
  return (
    <>
      <div>App 1 : {data} </div>
      <Child_1 />
    </>
  );
}

export default App