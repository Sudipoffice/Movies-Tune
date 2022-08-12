import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Slider.css";
import { AiFillStar} from "react-icons/ai";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from "react-router-dom";


function Slider(){
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        console.log(data.results);
        setContent(data.results);
    };

    useEffect(() =>{
        fetchTrending();
    }, [])

    return(
        <div className="slider-home">
        <AliceCarousel
                   
                    autoPlay={true}
                    animationDuration={8000}
                    duration={300}
                    infinite={true}
                    autoPlayStrategy={0}
                    disableButtonsControls={true}
                    disableDotsControls={true}
                
            >
           
        {content && content.map((c) =>(
               <div>
                  <div className="poster-img">
                                
                  <img alt="" className="poster-image" src={`https://image.tmdb.org/t/p/original${c && c.backdrop_path}`} />
                                  
                   </div>
                  <div className="poster-info">
                 <div className="poster-title">{ c.title || c.name}</div>
                    <div className="poster-info-pri">
                      <div className="poster-rating">
                           <div className="star-icon"> <AiFillStar size={15}/> </div>
                       <div> {c.vote_average.toFixed(1)}</div>
                         </div>
                         <Link to={`/trendingdetails/${c.id}`}>
                          <div className="get-details">
                            <button className="details-btn">More Info</button>
                           </div>
                         </Link>
                         </div>
                        </div>

               </div>


               ))}


        
      
    </AliceCarousel>      

        </div>
    );
}

export default Slider;