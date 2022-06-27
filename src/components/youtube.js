import React from "react";
import './youtube.css'

function Youtube() {
    return (
        <div className="videos">
            <section className="video-section">
                <article className="video-container">
                    <a href="#" className="thumbnail">
                        <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" alt="#"/>
                    </a>
                    <div className="video-bottom-section">
                        <a href="#">
                            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" alt="#"/>
                        </a>
                        <div className="video-details">
                            <a href="#" className="video-title">Video Title</a>
                            <a href="#" className="video-channel-name">Channel Name</a>
                            <div className="video-metadata">
                                <span>12k views</span>
                                •
                                <span>1 week ago</span>
                            </div>

                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}


export default Youtube;