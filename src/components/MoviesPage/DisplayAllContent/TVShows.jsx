import React, {useState, useEffect} from "react"
import axios from "axios";
import "./TVShows.css"
import TvshowsSingleCard from "../SingleCard/TvshowsSingleCard";
import { IoTvSharp } from "react-icons/io5";


const TVShows = () => {
    const [content, setContent] = useState([]);

    const fetchMovies = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
        );
        // console.log(data.results);
        setContent(data.results);
    };

    useEffect(() =>{
        fetchMovies();
    }, [])

    return(
        <div className="tv-shows" id="discovertvshows">
        <h1><IoTvSharp size={35}/> TV Shows</h1>

        <div className="card">
        {content && content.map((c) =>(
            <TvshowsSingleCard
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date || c.first_air_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
            />
        ))}
        </div>


        </div>
    );
};

export default TVShows;