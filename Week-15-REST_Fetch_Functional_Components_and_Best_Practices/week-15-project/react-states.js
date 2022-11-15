import React, {useState} from "react";

function App(){
    const [count, setCount] = useState(0)   
    
    function decrementCount()
    setCount(prevCount => prevCount -1)
    
    function incrementCount()
    setCount(prevCount => prevCount +1)




    return(
        <>
        <button onClick={decrementCount}>-</button>
            <span>0</span>
        <button onClick={incrementCount}>+</button>

        </>
    )
}