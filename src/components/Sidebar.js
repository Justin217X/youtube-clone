import React from 'react';
import './Sidebar.css';
import home from './svg/home-D.svg';
import explore from './svg/explore-D.svg';
import subscriptions from './svg/subscriptions-D.svg';
import library from './svg/library-D.svg';
import history from './svg/history-D.svg';
import yourV from './svg/your-videos-D.svg';
import watchL from './svg/watch-later-D.svg';
import likedV from './svg/like-D.svg';

function Sidebar() {
    return (
        <div className="side-bar">
                <a href="#" className="side-bar-icons active"><img src={home} alt=""></img>Home</a>
                <a href="#" className="side-bar-icons"><img src={explore} alt=""></img>Explore</a>
                <a href="#" className="side-bar-icons"><img src={subscriptions} alt=""></img>Subscriptions</a>
                <hr className="seperator"></hr>
                <a href="#" className="side-bar-icons"><img src={library} alt=""></img>Library</a>
                <a href="#" className="side-bar-icons"><img src={history} alt=""></img>History</a>
                <a href="#" className="side-bar-icons"><img src={yourV} alt=""></img>Your Videos</a>
                <a href="#" className="side-bar-icons"><img src={watchL} alt=""></img>Watch Later</a>
                <a href="#" className="side-bar-icons"><img src={likedV} alt=""></img>Liked Videos</a>
        </div>
    )
}

export default Sidebar;