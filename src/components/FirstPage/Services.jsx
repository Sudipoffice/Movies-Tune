import React from "react";
import "./Services.css";
import Tilt from 'react-parallax-tilt';
import Music from "./images/Music.png";
import Movies from "./images/Movies.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';



function Services(){

    return(
        <div className="service">
        <div className="services-info in">
        <h1>Enjoy two forms of entertainment on a single website in no time. </h1>
        <button className="tap-btn">
            <p>Tap to Explore</p>
        </button> 
        <span className="right-arrow">
        <FontAwesomeIcon icon={faChevronRight} />
        <FontAwesomeIcon icon={faChevronRight} />
        </span>
        </div>
        <div className="services-logo lg">
        <div className="services-music">
            <Tilt>
            <div className="music">
            <a href="https://www.spotify.com/" rel="noreferrer" target="_blank">
            <img className="music-img" src={Music} alt="Music"/>
            </a>
            </div>
            </Tilt>
        </div>
        <div className="services-movies">
            <Tilt>
            <div className="movies">
            <a href="https://www.netflix.com/" rel="noreferrer" target="_blank">
            <img className="movies-img" src={Movies} alt="Movies"/>
            </a>
            </div>
            </Tilt>
        </div>
        </div>
        </div>
    );
}

export default Services;