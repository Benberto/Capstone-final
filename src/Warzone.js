import Search from "./componentswz/Searchwz";
import React from "react";
import Header from "./componentswz/Headerwz";
import "./warzone.css";
// import NavBar from "./NavBar"
import { StatProviderwz } from "./StatProviderwz";
// import { Link } from "react-router-dom";
function Warzone() {
  return (
    <div className="no-background-image">
      {/* <button className="home-button"><Link to="/"style={{textDecoration:"none", color: "white"}}>Home</Link></button> */}
      <a href="/" class="animated-button1" style={{ width:"3%"}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        home
        </a>
      <StatProviderwz>
        <Header />
        <Search
          pcPlatform="steam"
          platforms="Steam ID, PSN ID, Xbox Gamertag"
        />
      </StatProviderwz>
    </div>
  );
}

export default Warzone;