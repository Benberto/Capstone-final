import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container" style={{textAlign: 'center'}}>
      <div className="home-logo">

      </div>
      {/* <h1 style={{background:"black", width: "20%", height:"50px", marginLeft:'817px', marginTop: "17%", borderRadius:"15px", paddingTop:"10px", postion: "absolute"}}>Pick a Tracker</h1> */}
        <div className="btn-card">
          <button className="btn" id="apex">
            <Link to="/apex-legends-tracker" style={{ textDecoration:"none", fontWeight: "bold", fontSize: "50px", color: "orange",}}>Apex Legends</Link>
          </button>

          <button className='btn' id="csgo">
            <Link to="/csgo-tracker" style={{textDecoration:"none", fontWeight: "bold", fontSize: "50px", color: "white"}}>CS:GO</Link>
          </button>
          
          <button className='btn' id="splitgate">
            <Link to="/splitgate-tracker" style={{textDecoration:"none", fontWeight: "bold", fontSize: "50px", color: "white"}}>Splitgate</Link>
          </button>

        </div>
    </div>
  );
}

export default Home;