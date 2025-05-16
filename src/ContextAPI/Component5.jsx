import React, { useState } from "react";

const Component5 = () => {
    const[name, setName] = useState("Himanshu")
    return(
        <div style={{display: "flex", justifyContent: "center"}}> 
        <h1 style={{color: "red", backgroundColor: "yellowgreen"}}>{name}</h1>
        </div>
    )
}

export default Component5