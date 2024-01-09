import React, { useContext } from "react";
import { firstName , lastName } from "./App";

const Comp_C = () => {
  const fname = useContext(firstName)
  const lname= useContext(lastName)
  return (
    <>
      {/* using useContext */}
      
      <h1>my name is {fname} and last name is  {lname}</h1>


      {/* without useContext */}
      {/* <firstName.Consumer>
        {(firstName) => {
          return (
            <>
              <lastName.Consumer>{
                (lastName)=>{
                    return <div>my name is {firstName} and last name is  {lastName} </div>;
                }
              }</lastName.Consumer>
            </>
          );
        }}
      </firstName.Consumer> */}
    </>
  );
};

export default Comp_C;
