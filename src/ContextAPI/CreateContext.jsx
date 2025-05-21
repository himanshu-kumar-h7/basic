import { createContext } from "react";


const MyContext = createContext({
    name:"Fallback",
    setName: () => {}
})


export default MyContext