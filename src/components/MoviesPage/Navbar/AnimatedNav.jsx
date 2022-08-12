import React from "react";
import "./AnimatedNav.css";
import { NavLink } from "react-router-dom";


function AnimatedNav(){


    return(
        <div className="animatednav">

        <ul>
          <li className="animated-bg"><NavLink to="trendingmovies" style={({ isActive }) => ({ 
                            color: isActive ? 'orange' : 'whitesmoke' }
                            )} className="active-items" >
            Trending
          </NavLink></li>
          <li className="animated-bg"><NavLink to="discovermovies" style={({ isActive }) => ({ 
                            color: isActive ? 'turquoise' : 'whitesmoke' })} className= "active-items">
            Movies
          </NavLink></li>
          <li className="animated-bg"><NavLink to="discovertvshows" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })} className= "active-items">
            TV Shows
          </NavLink></li>
        </ul>
        
        </div>
    );
}

export default AnimatedNav;