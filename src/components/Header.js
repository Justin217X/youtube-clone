import React from "react";
import './Header.css'
import logo from './youtube-logo.png'
import search from './search.svg'
import create from './create.svg'
import apps from './apps.svg'
import bell from './notifications.svg'


function Header() {
    return(
        <div className="header">
            <a href="#">
                <img src={logo} alt="Youtube Logo" className="youtube-logo" />
            </a>
            <form className="search-bar">
                <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                <button type="submit" className="search-button">
                    <img src={search}/>
                </button>
            </form>
            <div className="menu-icons">
                <a href="#">
                    <img src={create} alt="Upload Video" />
                </a>
                <a href="#">
                    <img src={apps} alt="Apps" />
                </a>
                <a href="#">
                    <img src={bell} alt="Notifications" />
                </a>
                <a href="#">
                    <img className="menu-channel-icon" src="http:///unsplash.it/36/36?gravity=center" alt="Your Channel" />
                </a>

            </div>
        </div>
    )
}

export default Header