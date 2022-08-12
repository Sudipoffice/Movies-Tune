import React from "react";
import Services from "./FirstPage/Services";
import AboutTeam from "./FirstPage/AboutTeam";
import Footer from "./FirstPage/Footer";

function FirstPage(){
    return (
        <div>
            <Services/>
            <AboutTeam/>
            <Footer/>
        </div>
    );
}

export default FirstPage;