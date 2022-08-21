import React from "react";
import "./musicContent.css";
import image1 from "./images/img1.jpg";
import image3 from "./images/img3.jpg";
import image2 from "./images/arjit.jpg";
import image4 from "./images/nautiyal.jpg";


function MusicContent(){
    return( 
            <div className="content_ui">
                <div className="popular_songs">
                    <div className="h4">
                        <h4>Popular Songs</h4>
                        <div className="move_btn">
                             <i class="bi bi-arrow-left-circle-fill"></i>
                             <i id="leftbtn" class="bi bi-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                    <div className="pop_songs_list">
                            <li className="song_name">
                             <div className="img_play">
                                <img src={image1} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="1"></i>
                             </div>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                            </li>
                            <li className="song_name">
                             <div className="img_play">
                             <img src={image3} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="2"></i>
                             </div>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                            </li> 
                            <li className="song_name">
                             <div className="img_play">
                                <img src={image1} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="1"></i>
                             </div>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                            </li>
                            <li className="song_name">
                             <div className="img_play">
                             <img src={image3} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="2"></i>
                             </div>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                            </li> 
                            <li className="song_name">
                             <div className="img_play">
                                <img src={image1} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="1"></i>
                             </div>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                            </li>
                            <li className="song_name">
                             <div className="img_play">
                             <img src={image3} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="2"></i>
                             </div>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                            </li> 
                            <li className="song_name">
                             <div className="img_play">
                                <img src={image1} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="1"></i>
                             </div>
                                <h5>Kesariya Tera <br/><div className="singer">Arjit Singh</div></h5>
                            </li>
                            <li className="song_name">
                             <div className="img_play">
                             <img src={image3} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="2"></i>
                             </div>
                                <h5>Kajal Piya <br/> <div className="singer">Arjit Singh</div></h5>
                            </li> 
                    </div>
                </div>
                <div className="popular_artist">
                    <div className="h4">
                        <h4>Popular Artist</h4>
                        <div className="move_btn">
                             <i class="bi bi-arrow-left-circle-fill"></i>
                             <i id="leftbtn" class="bi bi-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                    <div className="pop_artist_list">
                            <li className="artist_name">
                             <div className="img_play">
                                <img src={image2} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="3"></i>
                             </div>
                                <h5>Arjit Singh</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                             <img src={image4} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="4"></i>
                             </div>
                                <h5>Jubin Nautiyal</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                                <img src={image2} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="3"></i>
                             </div>
                                <h5>Arjit Singh</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                             <img src={image4} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="4"></i>
                             </div>
                                <h5>Jubin Nautiyal</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                                <img src={image2} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="3"></i>
                             </div>
                                <h5>Arjit Singh</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                             <img src={image4} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="4"></i>
                             </div>
                                <h5>Jubin Nautiyal</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                                <img src={image2} alt="photo"></img>
                                <i class="bi bi-play-circle-fill" id="3"></i>
                             </div>
                                <h5>Arjit Singh</h5>
                            </li>
                            <li className="artist_name">
                             <div className="img_play">
                             <img src={image4} alt="photo"></img>
                             <i class="bi bi-play-circle-fill" id="4"></i>
                             </div>
                                <h5>Jubin Nautiyal</h5>
                            </li>
                    </div>
                </div>
        </div>        
    );
}
export default MusicContent;