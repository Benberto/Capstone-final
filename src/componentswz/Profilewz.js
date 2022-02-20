import React from "react";
import { useParams } from "react-router-dom";
import { StatContextwz } from "../StatProviderwz";
// import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import StatTablewz from "./StatTablewz";
import { useNavigate } from "react-router-dom";

function Profilewz() {
  const navigate = useNavigate();
  document.body.className = "warzone-container";
  const { platform, gamertag } = useParams();
  const context = React.useContext(StatContextwz);
  let stats = context.state.profileData;
  
  React.useEffect(() => {
    context.getStats(platform, gamertag);
    console.log(context)
  }, []);

  const onClick = () => {
    context.resetState();
    navigate(`/warzone-tracker`);
  };
  if (context.state.loading === true) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else if (context.state.loading === false && context.state.error === true) {
    console.log(stats)
    return (
      <div className="error">
        <div className="errorMsg">
          <h1>{context.state.errorRes}</h1>
          <button className="returnBtn" onClick={onClick}>
            Return
          </button>
        </div>
      </div>
    );
  } else
    return (
      <>
        <div className="csgo-player-profile">
          <div className="stats">
            <div className="header">
              <div className="player-profile-img">
                <div className="player-profile-img-circle"></div>
              </div>
            </div>
            <div className="title">
            </div>
            <div className="legend-stat-container">
              <StatTablewz
                overview={stats.br_all.kills}
                stats={stats.br_all.wins}
              />
            </div>
            <button className="returnBtn" onClick={onClick}>
              Return
            </button>
          </div>
        </div>
      </>
    );
}

export default Profilewz;
