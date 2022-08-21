import React from "react";
import image from "./images/img1.jpg";

function Player(props){
    return <div>
         <img src={image} alt="img" id="poster_songPlayer"></img>
         <h5 id="bottom_songName">
         {props.musics[props.currentSongIndex].song}
         <div className="bottom_singerName">{props.musics[props.currentSongIndex].singer}</div>
         </h5>


         
         </div>;
}
export default Player;