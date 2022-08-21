//array
import {useState, useEffect} from "react";  
import SongPlayer from "./songPlayer";

function musicDictionary() {
    const [musics] = useState([
    {
        song: "Kesariya Tera",
        singer: "Arjit Singh",
        img_src: "./images/img1.jpg",
        src: "./music/song1.mp3"
    },
    {
        song: "Kajal Piya",
        singer: "Arjit Singh",
        img_src: "./images/img3.jpg",
        src: "./music/song2.mp3"
    }
]);
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

useEffect= (() => {
    setNextSongIndex(() => {
        if (currentSongIndex + 1 > musics.length - 1){
            return 0;
        }
        else{
            return currentSongIndex + 1;
        }
    });
}, [currentSongIndex]); 

return(
    <div>
        <SongPlayer
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            musics={musics}

        />
    </div>
); 

}
export default musicDictionary;