import React from 'react'

export default function NavBar() {
    onHome = (e) => {
        console.log("home clicked");
        // add steps to open home component
    }
    onProfile = (e) => {
        console.log("profile clicked");
        // add steps to open profile component
    }
    onSettings = (e) => {
        console.log("settings clicked");
        // add steps to open settings component
    }

    return (
        <div>
            <img alt="logo" src="#" />
            <nav>
                <li className="navItem" id="home"><button id="homeButton" onClick={onHome}></button></li>
                <li className="navItem" id="profile"><button id="homeButton" onClick={onProfile}></button></li>
                <li className="navItem" id="settings"><button id="homeButton" onClick={onSettings}></button></li>
            </nav>
        </div>
    )
}
