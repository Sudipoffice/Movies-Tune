import React from "react";
import "./Services.css";

function Services(){
    return(
        <body>
        <div className="service">
        <div className="services-info in">
        <h1>Enjoy two forms of entertainment on a single website in no time. </h1>
        <button className="tap-btn">
            <p>Tap to Explore</p>
        </button>
        </div>
        <div className="services-logo lg">
        <div className="services-music"></div>
        <div className="services-movies"></div>
        </div>
        </div>
        </body>
    );
}

export default Services;