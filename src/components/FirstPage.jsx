import React from "react";
import Services from "./FirstPage/Services";
import AboutTeam from "./FirstPage/AboutTeam";
import AboutUs from "./FirstPage/AboutUs";
import Footer from "./FirstPage/Footer";
import Home from "./FirstPage/Home";
import Navbar from "./FirstPage/NavBar";

function FirstPage(){
    return (
        <div>
            <Navbar/>
            <Home/>
            <Services/>
            <AboutUs/>
            <AboutTeam/>
            <Footer/>
        </div>
    );
}

export default FirstPage;