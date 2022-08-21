import React from "react";

function PlayerControls(props){
    return <div className="song_icons">
           <i className="bi bi-skip-start-fill" id="previous_button"></i>
           <i className="bi bi-play-circle-fill" id="play_button" onClick = {() => props.setIsPlaying(!props.isPlaying)}></i>
           <i className="bi bi-skip-end-fill" id="next_button"></i>
           <i className="bi bi-download" id="download"></i>
           </div>;
}
export default PlayerControls;