import React from "react";
import "./Footer.css";
import siteLogo from "./images/Icon.png"

function Footer(){
    return (<div className="footer">

           <div className="footer-options">

           <div className="lists">
           <ul>
            <li className="column">Features</li>
            <li className="row1"><a href="/movies">Movies</a></li>
            <li className="row2"><a href="#">Music</a></li>
           </ul>
           </div>
           <div className="lists">
           <ul>
            <li className="column">Contact</li>
            <li className="row1"><a href="#">Number</a></li>
            <li className="row2"><a href="mailto:mandalsudipoffice@gmail.com" target="_blank" rel="noopener noreferrer">Email Id</a></li>
           </ul>
           </div>
           <div className="lists"> 
            <ul> 
            <li className="column">Social Media</li>
            <li className="row1"><a href="#" onclick="window.open('https://www.linkedin.com/in/sudipmandal/');
    window.open('https://www.linkedin.com/in/anupamtiwari06/');" target="_blank" >LinkedIn</a></li>
            <li className="row2"><a href="#">Twitter</a></li>
           </ul>
           </div>

           </div>
           <div className="footer-logo">
           <div><img  className="icon" src={siteLogo}/></div>
           <div><p className="bottomLabel">MoviesTune</p>
           <p className="copyright">ⓒ 2022</p>
           </div>
           </div>
           </div>);
}
export default Footer;