import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container" style={{textAlign: 'center',}}>
      <h1 style={{background:"black", width: "20%", height:"50px", marginLeft:'817px', marginTop: "17%", borderRadius:"15px", paddingTop:"10px", postion: "absolute"}}>Pick a Tracker</h1>
        <div className="btn-card">
          <button className="btn" id="apex">
            <Link to="/apex-legends-tracker" style={{ textDecoration:"none", fontWeight: "bold", fontSize: "30px", color: "#e28a0f"}}>Apex Legends</Link>
          </button>

          <button className='btn' id="csgo">
            <Link to="/csgo-tracker" style={{textDecoration:"none", fontWeight: "bold", fontSize: "30px", color: "white"}}>CS:GO</Link>
          </button>
          
          <button className='btn' id="warzone">
            <Link to="/warzone-tracker" style={{textDecoration:"none", fontWeight: "bold", fontSize: "30px", color: "yellow"}}>CoD: Warzone</Link>
          </button>

        </div>
    </div>
  );
}

export default Home;