import React from "react";
import MoviesNavbar from "./MoviesPage/Navbar/MoviesNavbar";
import SideNavbar from "./MoviesPage/Navbar/SideNavbar";
import MoviesHome from "./MoviesPage/HomePage/MoviesHome";
import MoviesContent from "./MoviesPage/DisplayAllContent/MoviesContent";
import Trending from "./MoviesPage/DisplayAllContent/Trending";
import Movies from "./MoviesPage/DisplayAllContent/Movies";
import TVShows from "./MoviesPage/DisplayAllContent/TVShows";
import { Routes, Route } from "react-router-dom";



function MoviesPage(){
    return(
        <div style={{position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,}}>

        <MoviesNavbar/>
        <SideNavbar/>
        <MoviesHome/>
        <MoviesContent/>

        <Routes>
            <Route  path="trendingmovies" element={<Trending/>}/>
             <Route  index element={<Trending/>}/>
            <Route path="discovermovies" element={ <Movies/>}/>
            <Route path="discovertvshows" element={ <TVShows/>}/>
            
        </Routes>
        
        </div>
    );
}

export default MoviesPage;