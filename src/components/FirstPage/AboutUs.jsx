import React from "react";
import "./AboutUs.css";
import Octopus from "./images/Octopus.png";

function AboutUs(){
    return <div>
           <div className="aboutUs">
           <div className="aboutus-heading">

           <p className="head1">About Us</p>

           <div className="head2">
           What is MoviesTune?
           </div>
           <img className="Octopus" src={Octopus}/> 
           </div>

           <div className="para">
           <p className="p1">MoviesTune is a platform which provides 2 types of entertainment in one convenient place. Enjoy watching a movie or listening to your favourite album from the comfort of your own place.</p>
           <p className="p2">MoviesTune holds all the information about a movie in the cinema category along with a trailer.</p>
           <p className="p3">You can listen to all of your favorite songs online with MoviesTune for free with just one click.</p>
           </div>
           

           </div>
           </div>;
}
export default AboutUs;