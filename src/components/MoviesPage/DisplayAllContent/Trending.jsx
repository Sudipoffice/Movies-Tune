import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Trending.css";
import { HiTrendingUp } from "react-icons/hi";
import TrendingSingleCard from "../SingleCard/TrendingSingleCard";

const Trending = () => {
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        // console.log(data.results);
        setContent(data.results);
    };

    useEffect(() =>{
        fetchTrending();
    }, [])

    return(
        <div className="trending" id="trendingmovies">
        <h1><HiTrendingUp size={40}/>Trending</h1>

        <div className="card">
        {content && content.map((c) =>(
            <TrendingSingleCard
                key={c.id}
                id={c.id}
                backdrop={c.backdrop_path}
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

export default Trending;