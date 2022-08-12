import React from "react";
import "./MoviesSingleCard.css";
import { img_w300, unavailable } from "../../../ApiConfig/apiConfig";
import { AiFillStar} from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleCard = ({
    key,
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    
    return(
    <div className="singlecard">
    <Link className="movies-card" to={`/trendingdetails/${id}`}>
    <img src={poster? `${img_w300}/${poster}` : unavailable} alt={title}/>
    </Link>
    <div className="card-info">
    <b className="title">{title}</b>
    <div className="ratings">
    <span className="star-icon"><AiFillStar size={10}/></span><span className="no">{vote_average.toFixed(1)}</span>
    </div>
    </div>
    </div>
        );
};

export default SingleCard;