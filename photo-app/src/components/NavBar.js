import React from 'react'

export default function NavBar() {

        
        const onHome = (e) => {
            console.log("home clicked");
            // add steps to open home component
        }
        const onProfile = (e) => {
            console.log("profile clicked");
            // add steps to open profile component
        }
        const onSettings = (e) => {
            console.log("settings clicked");
            // add steps to open settings component
        }
    
        // this.onHome = this.onHome.bind(this);
        // this.onProfile = this.onProfile.bind(this);
        // this.onSettings = this.onSettings.bind(this);

    return (
        <div id="navWrap">
            <img alt="logo" src="#" />
            <nav>
                <li className="navItem" id="home"><button id="homeButton" onClick={onHome}></button></li>
                <li className="navItem" id="profile"><button id="profileButton" onClick={onProfile}></button></li>
                <li className="navItem" id="settings"><button id="settingsButton" onClick={onSettings}></button></li>
            </nav>
        </div>
    )
}
