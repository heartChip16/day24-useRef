import React from 'react'
import useLocalStorage from './useLocalStorage'

function Header() {
    const [username, setUsername] = useLocalStorage("username", "");
    return (
        <>
            <br />
            <header><h1>{username}</h1></header>
            <br />
        </>
    )
}

export default Header