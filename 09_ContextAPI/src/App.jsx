import React, { createContext } from 'react'
import Comp_A from './Comp_A'

const firstName = createContext();
const lastName = createContext();

const App = () => {
  return (
    <>
      <div>Context API</div>
      <firstName.Provider value={"sanket"}>
        <lastName.Provider value={"mane"}>
          <Comp_A />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
}

export default App
export {firstName, lastName}