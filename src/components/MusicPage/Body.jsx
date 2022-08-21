import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Body.css";
import Logo from "./images/Icon.png";

function Body(){
    return(
           <div className="container1">
           <div className="NavBar2">
           <img className="logo3" src={Logo}></img>
            <h2 className="MusicName">MoviesTune</h2>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
           </div>
           <div className="MusicQuote">
            <p>WHEN WORDS FAIL, MUSIC SPEAKS..!</p>
           </div>
           <p className="MusicScroll">Scroll Down To Listen</p>
           <FontAwesomeIcon className="play" icon={faPlayCircle} size={"3x"} fade/>
           </div>
          );
}
export default Body;