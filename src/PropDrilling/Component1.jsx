import { useState } from "react";
import Component2 from "./Component2";
const Component1 = () => {
    const[value, setValue] = useState("Component1")

return(
    <>
    <h1>Hello {value}</h1>
    <Component2 hi={value}/>

    </>
)

}


export default Component1