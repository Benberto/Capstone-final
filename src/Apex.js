import Search from "./components/Search";
import React from "react";
import Header from "./components/Header";
import "./apex.css";
// import NavBar from "./NavBar"
import { StatProvider } from "./StatProvider";
// import { Link } from "react-router-dom";
function Apex() {
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
      <StatProvider>
        <Header />
        <Search
          pcPlatform="origin"
          platforms="Origin Id, PSN ID, Xbox Gamertag"
        />
      </StatProvider>
    </div>
  );
}

export default Apex;
