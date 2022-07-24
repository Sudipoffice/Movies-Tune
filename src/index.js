import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Favicon from 'react-favicon';
import Fav from "../src/components/FirstPage/images/Favicon.png";

ReactDOM.render(
  <div>
  <Favicon url={Fav}/>
  <App/>
  </div>
  ,document.getElementById("root"));