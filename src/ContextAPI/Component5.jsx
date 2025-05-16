import React, { useState } from "react";
import MyContext from "./CreateContext";
import Component6 from "./Component6";

const Component5 = () => {
    const[name, setName] = useState("Himanshu")
    return(
        <MyContext.Provider value={{name, setName}}>
            <div style={{display: "flex", justifyContent: "center"}}> 
        <h1 style={{color: "red", backgroundColor: "yellowgreen"}}>{name}</h1>
        <Component6/>
        </div>


        </MyContext.Provider>
        
    )
}

export default Component5