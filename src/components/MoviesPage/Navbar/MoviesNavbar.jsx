import React from "react";
import "./MoviesNavbar.css";
import { BiSearchAlt } from "react-icons/bi";

function MoviesNavbar(){
//   const [content, setContent] = useState([]);
//   const [searchKey, setSearchKey] = useState("");

//   const fetchMovies = async (searchKey) => {
//     const type = searchKey? "search" : "discover" ;
//     const {data} = await axios.get(

//         `https://api.themoviedb.org/3/${type}/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY, {query: searchKey }}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
//     );
//     // console.log(data.results);
//     setContent(data.results);
// };

// useEffect(() =>{
//   fetchMovies();
// }, [])

//   const searchMovies = (a) =>{
//     a.preventDefault();
//     fetchMovies(searchKey)
//   }




    return(
        <nav className="navbar">
        <div className="navbar-link">
        <div className="logo"><span>LOGO</span></div>
      <ul>
        <li className="navbar-items"><a href="/">Home</a></li>
        <li className="navbar-items"><a href="/movies">Movies</a></li>
        <li className="navbar-items"><a href="https://www.spotify.com">Music</a></li>
        <li className="navbar-items"><a href="/">Sign Up</a></li>
        <li className="navsearch">


        {/* onSubmit={searchMovies} */}
       <form >  
        <input type="text" className="navbar-search" placeholder="Search" 
        // onChange={(a) => setSearchKey(a.target.value) }
        />
        <button type="submit" className="search-btn">
        <BiSearchAlt/>
        </button>
        </form> 


        </li>
      </ul>
      </div>
        </nav>
    );
}

export default MoviesNavbar;