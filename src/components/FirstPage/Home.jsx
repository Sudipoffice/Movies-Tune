import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Img1 from "./images/gradient.png";
import Img2 from "./images/astronaut.png";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Home(){
    return <div className="home-primary">
           
           <div className="home-pri">
           <div className="home-quote"><p className="quote">One stop for all your <strong>entertainment</strong> needs....!!</p></div>

           <div className="home-photo">
           <img className="gradient" src={Img1}/>
           <img className="astronaut" src={Img2}/>
           </div>
           
           <div className="home-icons">
           <a href="#"><FontAwesomeIcon className="fb" icon={faFacebook} size={"2x"} beat></FontAwesomeIcon></a>
           <a href="#"><FontAwesomeIcon className="twitter" icon={faTwitter} size={"2x"} beat></FontAwesomeIcon></a>
           <a href="#"><FontAwesomeIcon className="linkedIn" icon={faLinkedin} size={"2x"} beat></FontAwesomeIcon></a>
           <a href="#"><FontAwesomeIcon className="gitHub" icon={faGithub} size={"2x"} beat></FontAwesomeIcon></a>
           </div>
           </div>
          <a  onClick={() => window.scrollTo(0, window.innerHeight)}> <FontAwesomeIcon className="scrollicon" icon={faCircleArrowDown} size={"2x"} bounce></FontAwesomeIcon>
           <p className="scrollText">Scroll Down</p> </a>
            
          
           </div>;
}
export default Home;