import Search from "./componentswz/Searchwz";
import React from "react";
import Header from "./componentswz/Headerwz";
import "./warzone.css";
// import NavBar from "./NavBar"
import { StatProviderwz } from "./StatProviderwz";
import { Link } from "react-router-dom";
function Warzone() {
  return (
    <div className="warzone-container">
      <button className="home-button"><Link to="/"style={{textDecoration:"none", color: "white"}}>Home</Link></button>
      <StatProviderwz>
        <Header />
        <Search
          pcPlatform="battle"
          platforms="battleNET,Activision ID, PSN ID, Xbox Gamertag"
        />
      </StatProviderwz>
    </div>
  );
}

export default Warzone;
