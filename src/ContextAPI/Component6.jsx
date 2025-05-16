import React, { useState } from "react";

const Component1 = () => {
    const[name, setName] = useState("Himanshu")
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}

export default Component1