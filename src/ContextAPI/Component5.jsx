import React, { useState, useContext } from "react";
import Component6 from "../ContextAPI/Component6"
import MyContext from "./CreateContext";

const Component5 = () => {
  
const [name, setName] = useState("Himanshu")

const fallbackValue = useContext(MyContext)
const displayName = name || fallbackValue.name
const contextValue = name ? {name, setName} : fallbackValue
  return (
    <>
    {contextValue ? (
        <MyContext.Provider value={contextValue}>
        <h1 style={{ color: "red", backgroundColor: "yellowgreen" }}>
        {displayName}  </h1>
        <Component6/>

    </MyContext.Provider>
    ): (
        <Component6/>
    )}
    
      
    </>
  );
};

export default Component5;
