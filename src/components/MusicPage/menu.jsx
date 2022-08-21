import React from "react";
import "./menu.css";
import image1 from "./images/img1.jpg";
import image3 from "./images/img3.jpg";
import MusicContent from "./musicContent";
import SongPlayer from "./songPlayer";

function Menu(){
    return(
        <div className="container2">
            <header>
                <MusicContent/>
            


                <div className="menu_ui">
                    <h1>Playlist</h1>
                    <div className="playlist">
                        <h4 className="active"><span></span><i className="bi bi-music-note-list"></i> My Playlist</h4>
                        <h4><span></span><i class="bi bi-music-note-list"></i> My Songs</h4>
                    </div>
                        <div className="song_list">
                            <li className="song_name">
                                <span>01</span>
                                <img src={image1} alt="photo"></img>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="1"></i>
                            </li>
                            <li className="song_name">
                                <span>02</span>
                                <img src={image3} alt="photo"></img>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="2"></i>
                            </li>
                            <li className="song_name">
                                <span>01</span>
                                <img src={image1} alt="photo"></img>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="1"></i>
                            </li>
                            <li className="song_name">
                                <span>02</span>
                                <img src={image3} alt="photo"></img>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="2"></i>
                            </li>
                            <li className="song_name">
                                <span>01</span>
                                <img src={image1} alt="photo"></img>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="1"></i>
                            </li>
                            <li className="song_name">
                                <span>02</span>
                                <img src={image3} alt="photo"></img>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="2"></i>
                            </li>
                            <li className="song_name">
                                <span>01</span>
                                <img src={image1} alt="photo"></img>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="1"></i>
                            </li>
                            <li className="song_name">
                                <span>02</span>
                                <img src={image3} alt="photo"></img>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="2"></i>
                            </li>
                            <li className="song_name">
                                <span>01</span>
                                <img src={image1} alt="photo"></img>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="1"></i>
                            </li>
                            <li className="song_name">
                                <span>02</span>
                                <img src={image3} alt="photo"></img>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="2"></i>
                            </li>
                            <li className="song_name">
                                <span>01</span>
                                <img src={image1} alt="photo"></img>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="1"></i>
                            </li>
                            <li className="song_name">
                                <span>02</span>
                                <img src={image3} alt="photo"></img>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                                <i className="bi playListPlay bi-play-fill" id="2"></i>
                            </li>
                        </div>
                </div>


                {/* <SongPlayer/> */}
            </header>
        </div>
    );
}
export default Menu;