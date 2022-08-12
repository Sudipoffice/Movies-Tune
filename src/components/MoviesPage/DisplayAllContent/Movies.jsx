import React, {useState, useEffect} from "react"
import axios from "axios";
import "./Movies.css"
import MoviesSingleCard from "../SingleCard/MoviesSingleCard";
import { MdMovieCreation} from "react-icons/md";


const Movies = () => {
    const [content, setContent] = useState([]);

    const fetchMovies = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        );
        // console.log(data.results);
        setContent(data.results);
    };

    useEffect(() =>{
        fetchMovies();
    }, [])

    return(
        
        <div className="movies" id="discovermovies">
        <h1><MdMovieCreation size={35}/>   Movies</h1>
        <div className="card">
        {content && content.map((c) =>(
            <MoviesSingleCard
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

export default Movies;