import React from "react";
import "./AboutTeam.css";
import Sudip from "./images/SudipMandal.png";
import SudipFull from "./images/SudipFull.png";
import Anupam from "./images/AnupamTiwari.png";
import AnupamFull from "./images/AnupamFull.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faLink} from '@fortawesome/free-solid-svg-icons';
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
 import { FiGithub } from "react-icons/fi";



function AboutTeam(){


    return(
        <div className="about-team">
        <div className="about-team-info inf">
        <div className="edu-info">
        <p>The two of us are currently pursuing Bachelor of Technology in Computer Science Engineering at Lovely Professional University, Punjab. </p>
        </div> 
        <div className="heading">
        <h3>What we bring to the table</h3>
        </div> 
        <div className="our-info">
        <p>We've had a remarkable journey to get to where we are, and now we're convinced that, thanks to our expertise as front-end developers, we can deliver a professional and efficient solution in a timely manner. </p>
        </div> 
        </div>
        <div className="about-team-card ca">
        <div className="about-team-sudip">
            <div className="sudip">
            <div className="sudip-info">
            <h2 className="sudip-name">Sudip Mandal</h2>
            <a href="https://www.linkedin.com/in/sudipmandal/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
            <a href="https://github.com/Sudipoffice" target="_blank" rel="noreferrer"><FiGithub/></a>
            <a href="mailto:mandalsudipoffice@gmail.com" target="_blank" rel="noreferrer"><FiMail/></a>
            <p>An aspiring Software Engineer with excellent problem solving and web development skills with the ability to perform well in a team.</p>
            </div>
            <img className="sudip-img-1"  src={Sudip} alt="Sudip Mandal" />
            <img className="sudip-img-2"  src={SudipFull} alt="Sudip Mandal" />
            </div>
        </div>
        <div className="about-team-anupam">
            <div className="anupam">
            <div className="anupam-info">
            <h2 className="anupam-name">Anupam Tiwari</h2>
            <a href="https://www.linkedin.com/in/anupamtiwari06/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
            <a href="https://github.com/Anupam610" target="_blank" rel="noreferrer"><FiGithub/></a>
            <a href="mailto:anupamtiwari610@gmail.com" target="_blank" rel="noreferrer"><FiMail/></a>
            <p>An sincere and hard working Web Development enthusiast. Always motivated towards my goal and is searching for an opportunity.</p>
            </div>
            <img className="anupam-img-1" src={Anupam} alt="Anupam Tiwari"/>
            <img className="anupam-img-2"  src={AnupamFull} alt="Anupam Tiwari" />
            </div>
        </div>
        </div>
        </div>
    );
}

export default AboutTeam;