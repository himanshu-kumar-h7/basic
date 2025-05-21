import React, { useContext, useEffect, useState } from "react";
import MyContext from "./CreateContext";

const Component9 =() => {
  const {name, setName} = useContext(MyContext)

  useEffect(() =>{
    console.log("useEffect activated")
    const timer = setTimeout(() =>{
      setName("Updated Himanshu")
    },2000)

    return () =>
      clearTimeout(timer)
    
  },[])
    return(
        <>
        <br/> <br/> <br/>
        {/* <h1>{name}</h1> */}
      
      
      <h1 style={{ color: "blue" }}>Name from context: {name}</h1>
      
        </>
    )
}

export default Component9