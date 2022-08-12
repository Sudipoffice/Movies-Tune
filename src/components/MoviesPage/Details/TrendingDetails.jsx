import React, {useState, useEffect} from "react";
import axios from "axios";
import "./TrendingDetails.css";
import { useParams } from "react-router-dom";
import { AiFillStar} from "react-icons/ai";
import {img_w300, detailsbackdrop_original, unavailable_horizontal } from "../../../ApiConfig/apiConfig";
import {FaPlay} from "react-icons/fa";
import {IoArrowUndo} from "react-icons/io5";
import {Link } from "react-router-dom";
import YouTube from 'react-youtube';

const Trending = () => {
    const [content, setContent] = useState([]);
   const {id, media_type} = useParams();
   const [video, setVideo] = useState();
   const [trailer, setTrailer] = useState(null);

const fetchTrendingMovie = async () => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    );
    
    console.log(data);
    setContent(data);
};
const fetchTrendingTv = async () => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    );

    // console.log(data);
    setContent(data);
};

useEffect(() =>{
    fetchTrendingMovie();
    fetchTrendingTv();
}, [])

return(
    <div className="details-page" >
    <div className="details-card">

    <div className="details-poster">
    <Link to={`/movies`} className="details-backarrow">
    <IoArrowUndo size={30}/>
    </Link>
    <img className="details-poster-img" src={`${detailsbackdrop_original}/${content.backdrop_path}` } alt={content.title || content.name}/>
    </div>

    <div className="details-card-info">
    <b className="details-title">{content.title || content.name}</b>

    <div className="details-card-overview">
    <p  className="details-card-overview-txt">{content.overview}</p>
    
    <div className="details-card-genres">
   { content && content.genres?
   content.genres.map(genre =>(
    <span className="details-genre" id={genre.id}> {genre.name}</span>
   )) : ""
   }
    </div>
    </div>

<div className="ratings-trailer">
    <div className="details-ratings">
    <div className="details-star-icon"><AiFillStar size={25}/></div><div className="ratings-no">{content.vote_average}</div>
    </div>

    <Link to={`/watchtrailer/${content.id}`}>
    <div className="details-trailer">
    {/* <YouTube  videoId={trailer} opts={{
                                                width: '100%',
                                                height: '100%',
                                                playerVars: {
                                                    autoplay: 0,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }}
                                             /> */}
        <button>
       <div className="details-yt-play"><FaPlay/></div>
       <div className="details-yt-play-txt">
       Watch Trailer
       </div></button>
    </div>
    </Link>

    </div>

    </div>
    </div>
    <div className="details-small-poster">
    <img className="details-smallposter-img" src={`${img_w300}/${content.poster_path}` } alt={content.title || content.name}/>
    </div>
    
    </div>
);
};

export default Trending;