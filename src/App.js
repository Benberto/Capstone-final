import React from "react";
// import "./index.css";
// import "./home.css"
import Home from "./Home";
import CSGO from "./CSGO";
import Warzone from "./Warzone.js";
import Apex from "./Apex";
import { Routes, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Search from './Search'
import Profile from "./components/Profile";
import { StatProvider } from "./StatProvider";
import { StatProviderwz } from "./StatProviderwz";
import { StatProvidercs } from "./StatProvidercs";
import Profilecs from "./componentscsgo/Profilecs";
import Profilewz from "./componentswz/Profilewz";

function App() {
  return (
    <div className="App">
      <StatProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/apex-legends-tracker" element={<Apex />} />
          <Route path="/splitgate-tracker" element={<Warzone />} />
          <Route path="/csgo-tracker" element={<CSGO />} />
          {/* <Route exact path='/' element={<Search pcPlatform ='origin' platforms= 'Origin Id, PSN ID, Xbox Gamertag'/>} /> */}
          <Route
            exact
            path="/profile/:platform/:gamertag"
            element={<Profile />}
          />
        </Routes>
      </StatProvider>
      
      <StatProvidercs>
        <Routes>
        <Route
            exact
            path="/csgo-tracker/api/v2/profile/:platform/:gamertag"
            element={<Profilecs />}
          />
        </Routes>
      </StatProvidercs>
      <StatProviderwz>
        <Routes>
        <Route
            exact
            path="/splitgate-tracker/api/v3/profile/:platform/:gamertag"
            element={<Profilewz />}
          />
        </Routes>
      </StatProviderwz>
    </div>
  );
}

export default App;
