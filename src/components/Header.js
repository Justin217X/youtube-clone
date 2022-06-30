import React from "react";
import './Header.css'
import logo from './youtube-logo.png'
import search from './svg/search.svg'
import create from './svg/create.svg'
import apps from './svg/apps.svg'
import bell from './svg/notifications.svg'
import menu from './svg/menu-D.svg'







function Header() {
    return(
        <div className="header">
            
                <button type="button" className="menu-button">
                    <img src={menu} alt="Menu" className="menu" />
                </button>
            <a href="#">
                <img src={logo} alt="Youtube Logo" className="youtube-logo" />
            </a>
            <form className="search-bar">
                <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                <button type="submit" className="search-button">
                    <img src={search} alt="Search"/>
                </button>
            </form>
            <div className="header-icons">
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
                    <img className="header-channel-icon" src="http:///unsplash.it/36/36?gravity=center" alt="Your Channel" />
                </a>

            </div>
        </div>
    )
}

export default Header