import React, {useState, useRef, useEffect} from "react";
import "./songPlayer.css";

import Player from "./Player";
import PlayerControls from "./PlayerControls";

function SongPlayer(props){
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying){
            audioEl.current.play();
        }
        else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards){
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.musics.length - 1){
                    temp = 0;
                }
                return temp;
            });
        }else{
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex;
                temp--;

                if (temp <0){
                    temp = props.musics.length - 1
                } 
                return temp;
            });
        }
    }

   return (
           <div className="song_ui">
             <div className="wave">
                 <div className="wave1"></div>
                 <div className="wave1"></div>
                 <div className="wave1"></div>
             </div>

             <audio src={props.musics[props.currentSongIndex].src} ref={audioEl}></audio>
             <Player song={props.song[props.currentSongIndex]}/>
             <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
            
        

             <span id="current_duration">0:00</span>
             <div className="bar">
                 <input type="range" id="seek" min={"0"} max={"100"}></input>
                 <div className="player_bar"></div>
                 <div className="dot1"></div>
             </div>
             <span id="current_end">0:50</span>


             <i id="volume_icon" className="bi bi-volume-up-fill"></i>
             <div className="volume">
                 <input type="range" id="seek" min={"0"} max={"100"}></input>
                 <div className="volume_bar"></div>
                 <div className="dot2"></div>
             </div>
            </div>
            
            );
}
export default SongPlayer;