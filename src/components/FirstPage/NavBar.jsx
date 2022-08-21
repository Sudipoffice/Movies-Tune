import React from "react";
import "./NavBar.css";
import siteLogo from "./images/Icon.png";

function NavBar(){


return    <div className="navBar">
           
            <div className="nav-logo">
            <img className= "SiteLogo" src={siteLogo}/>
            <label className="logo">MoviesTune</label>
            </div>
            <div className="nav-links">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/music">Music</a></li>
            <li className="highlight"><a href="/">Sign Up</a></li>
            </ul>
            </div>
        
            </div> 
}

export default NavBar;