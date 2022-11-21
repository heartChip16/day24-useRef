import React from 'react'
import { useRef } from 'react'

function Counter() {
    const count = useRef(0);
    function handleClick() {
        count.current++;
        alert("Click count: " + count.current);
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default Counter

