import React from "react";
import "./SideNavbar.css";
import { NavLink } from "react-router-dom";
import { HiTrendingUp } from "react-icons/hi";
import { MdMovieCreation} from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";


function SideNavbar(){
    return(
        <div  className="sidenavbar">

            <a className="side-items" onClick={() => window.scrollTo(0, window.innerHeight)} ><NavLink to="trendingmovies" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="active-items" >
           <HiTrendingUp size={20}/>
          </NavLink></a>


          <a className="side-items" onClick={() => window.scrollTo(0, window.innerHeight)} ><NavLink to="discovermovies" style={({ isActive }) => ({ color: isActive ? 'turquoise' : 'white' })} className="active-items" >
          <MdMovieCreation size={20}/>
          </NavLink></a>


          <a className="side-items" onClick={() => window.scrollTo(0, window.innerHeight)} ><NavLink to="discovertvshows" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })} className="active-items" >
          <IoTvSharp size={20}/>
          </NavLink></a>
        
        </div>
    );
}

export default SideNavbar;