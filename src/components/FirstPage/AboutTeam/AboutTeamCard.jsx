import React from "react";
import "./AboutTeamCard.css";
import Sudip from "../images/SudipMandal.png";
import SudipFull from "../images/SudipFull.png";
import Anupam from "../images/AnupamTiwari.png";
import AnupamFull from "../images/AnupamFull.png";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
 import { FiGithub } from "react-icons/fi";

function AboutTeamCard(){
    return(
        <div>
        <div className="about-team-sudip">
        <div className="sudip">
        <div className="sudip-info">
        <h2 className="sudip-name">Sudip Mandal</h2>
        <a href="https://www.linkedin.com/in/sudipmandal/" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>
        <a href="https://github.com/Sudipoffice" target="_blank" rel="noopener noreferrer"><FiGithub/></a>
        <a href="mailto:mandalsudipoffice@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail/></a>
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
            <a href="https://www.linkedin.com/in/anupamtiwari06/" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>
            <a href="https://github.com/Anupam610" target="_blank" rel="noopener noreferrer"><FiGithub/></a>
            <a href="mailto:anupamtiwari610@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail/></a>
            <p>An sincere and hard working Web Development enthusiast. Always motivated towards my goal and is searching for an opportunity.</p>
            </div>
            <img className="anupam-img-1" src={Anupam} alt="Anupam Tiwari"/>
            <img className="anupam-img-2"  src={AnupamFull} alt="Anupam Tiwari" />
            </div>
        </div>
        </div>
    );
}

export default AboutTeamCard;