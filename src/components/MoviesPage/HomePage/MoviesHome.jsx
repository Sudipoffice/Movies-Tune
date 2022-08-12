import React from "react";
import Slider from "./Slider";
import Parallax from 'react-rellax';
import "./MoviesHome.css"


function MoviesHome(){
    return(
        <div className="home">
      <Parallax speed={-1} >
      <div class="macbook">
  <div class="screen">
    <div class="viewport">
    <Slider />
    </div>
  </div>
  <div class="base"></div>
  <div class="notch"></div>
</div>
</Parallax>

        </div>
    );
}

export default MoviesHome;