import { useState } from "react"
const ControlledComponent = ( ) => {

  const [name, setName] = useState('')
  const handleChange = (e) =>{
    setName(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prevented")
  }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type="text"
                value={name}
                onChange={handleChange}
                />
            </label>
            <button type="Submit">Submit</button>
        </form>
        </>
    )
}
export default ControlledComponent