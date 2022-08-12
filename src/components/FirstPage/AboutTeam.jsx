import React from "react";
import Parallax from 'react-rellax';
import "./AboutTeam.css";
import AboutTeamInfo from "./AboutTeam/AboutTeamInfo";
import AboutTeamCard from "./AboutTeam/AboutTeamCard";
import camera from "./3DIcons/Camera.png";
import trophy from "./3DIcons/Trophy.png";
import rocket from "./3DIcons/Rocket.png";



function AboutTeam(){

        
    return(
        <div className="about-team">
        <Parallax speed={-1} >
        <img src={camera} className="camera" alt="camera"/>
        </Parallax>
        <Parallax speed={2} >
        <img src={trophy} className="trophy" alt="trophy"/>
        </Parallax> 
        <Parallax speed={10} >
        <img src={rocket} className="rocket" alt="rocket"/>
        </Parallax> 
        <div className="about-team-secondary">
        <div className="about-team-info inf">
        <Parallax speed={0} >
       <AboutTeamInfo/>
       </Parallax>
        </div>
        <div className="about-team-card ca">
        <Parallax speed={0} >
       <AboutTeamCard/>
       </Parallax>
        </div>
        </div>
        </div>
    );
}

export default AboutTeam;