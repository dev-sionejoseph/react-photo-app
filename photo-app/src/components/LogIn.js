import React from 'react'

export default function LogIn() {
    return (
        <div id="loginWrap">
            <div id="loginBox">
                <input type="text" placeholder="Username" id="usernameInput"></input>
                <input type="text" placeholder="Password" id="passwordInput"></input>
                <button type="submit">Log In</button>
            </div>
        </div>
    )
}
