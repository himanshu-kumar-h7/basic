import React, { useContext, useEffect, useState } from "react";
import MyContext from "./CreateContext";

const Component9 =( ) => {
  const {name, setName} = useContext(MyContext)

  useEffect(() =>{
    const timer = setTimeout(() =>{
      setName("Updated Himanshu")
    },5000)

    return () =>
      clearTimeout(timer)
    
  },[])
    return(
        <>
        {/* <h1>{name}</h1> */}<br/> <br/> <br/>
        
        
      
        </>
    )
}

export default Component9