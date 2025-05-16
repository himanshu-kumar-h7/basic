import React from "react";
import Component3 from "./Component3";

const Component2 = ({hi}) =>{
    return(
        <>
        <h1>{hi} component2</h1>
        <Component3 value={hi}/>
        </>
    )
}

export default Component2