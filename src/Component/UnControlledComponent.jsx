import { useRef, useEffect } from "react";

const UncontrolledComponent = () => {
    const myRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = myRef.current.value;
        
        alert(`Submitted name: ${name}`);

    }
 // const handleClick = () => {
    //     myRef.current.focus()
    // }
    useEffect(() => {
        myRef.current.focus(); // Auto-focuses when component mounts
      }, []);

    return(
        <>
        <form onSubmit={handleSubmit}> 
            <label>
                Name:
                <input
                type="text"
                ref={myRef}
                />
            </label>
            <button type="Submit" >Submit</button>
        </form>
        
        </>
    )
}

export default UncontrolledComponent