import React from "react";
import "./App.css";
import FirstPage from "./FirstPage";
import MoviesPage from "./MoviesPage";
import MusicPage from "./MusicPage"
import TrendingDetails from "./MoviesPage/Details/TrendingDetails";
import WatchTrailer from "./MoviesPage/Details/WatchTrailer";
import { Routes, Route } from "react-router-dom";


function App(){
    return (
        <div  style={{position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,}}>
    <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/movies/*" element={<MoviesPage/>}/>
        <Route path="/music/*" element={<MusicPage/>}/>
        <Route 
         path="trendingdetails/:id" element={ <TrendingDetails/> }/>
         <Route 
         path="watchtrailer/:id" element={ <WatchTrailer/> }/>
    </Routes> 
    </div>
        
    );
}

export default App;
