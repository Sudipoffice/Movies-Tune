import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WatchTrailer.css";
import { useParams } from "react-router-dom";
import {IoArrowUndo} from "react-icons/io5";
import {Link } from "react-router-dom";
import YouTube from 'react-youtube';

const Trending = () => {
    const [content, setContent] = useState([]);
   const {id, key} = useParams();
   const [video, setVideo] = useState();
   const [trailer, setTrailer] = useState(null);

const fetchTrendingMovie = async () => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&append_to_response=videos`
    );
    if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
        setTrailer(trailer ? trailer.key : data.videos.results[0].key)
    }

    console.log(data);
    setContent(data);
};
// const fetchTrendingTv = async () => {
//     const {data} = await axios.get(
//         `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&append_to_response=videos`
//     );
//     if (data.videos && data.videos.results) {
//         const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
//         setTrailer(trailer ? trailer.key : data.videos.results[0].key)
//     }
//     console.log(data);
//     setContent(data);
// };


useEffect(() =>{
    fetchTrendingMovie();
    // fetchTrendingTv();
}, [])

return(
    <div className="watch-trailer">
    <Link className="watchtrailer-backarrow" to={`/trendingdetails/${content.id}`} >
    <IoArrowUndo size={30}/>
    </Link>

        <YouTube className="yt-display"  videoId={trailer} opts={{
                                                width: '90%',
                                                height: '90%',
                                                playerVars: {
                                                    autoplay: 0,
                                                    controls: 1,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }}
                                             /> 
                                            
    
    </div>
);
};

export default Trending;