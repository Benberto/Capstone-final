import Search from "./componentscsgo/Searchcs";
import React from "react";
import Header from "./componentscsgo/Headercs";
import "./csgo.css";
// import NavBar from "./NavBar"
import { StatProvidercs } from "./StatProvidercs";
// import { Link } from "react-router-dom";
function CSGO() {
  return (
    <div className="csgo-container">
      {/* <button className="home-button"><Link to="/"style={{textDecoration:"none", color: "white"}}>Home</Link></button> */}
      <a href="/" class="animated-button1" style={{ width:"3%"}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        home
        </a>
      <StatProvidercs>
        <Header />
        <Search
          pcPlatform="steam"
          platforms="Steamd ID"
        />
      </StatProvidercs>
    </div>
  );
}

export default CSGO;