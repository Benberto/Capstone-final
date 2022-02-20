import React from "react";
import { useParams } from "react-router-dom";
import { StatContextcs } from "../StatProvidercs";
import { FaWindows } from "react-icons/fa";
import StatTablecs from "./StatTablecs";
import { useNavigate } from "react-router-dom";

function Profilecs() {
  const navigate = useNavigate();
  document.body.className = "csgo-container";
  const { platform, gamertag } = useParams();
  const context = React.useContext(StatContextcs);
  let stats = context.state.profileData;

  React.useEffect(() => {
    context.getStats(platform, gamertag);
  }, []);

  const onClick = () => {
    context.resetState();
    navigate(`/csgo-tracker`);
  };
  if (context.state.loading === true) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else if (context.state.loading === false && context.state.error === true) {
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
        <div className="csgo-logo">

        </div>
        <div className="csgo-player-profile">
        <div className="agent-img">
          {/* <img url="../assets/csgoAgent4.png" alt="CSGO" /> */}
        </div>
          <div className="stats">
            <div className="header">
              <div className="player-profile-img">
                <div className="player-profile-img-circle">
                  <img src={stats.platformInfo.avatarUrl} alt="" />
                </div>
              </div>
              <div className="title">
                <h1>{stats.platformInfo.platformUserHandle}</h1>
                {stats.platformInfo.platformSlug === "steam" ? (
                  <FaWindows className="platform-icon" />
                ) : (
                  <FaWindows className="platform-icon" />
                )}
              </div>
              <div className="legend-stat-container">
                <StatTablecs
                  overview={stats.segments[0]}
                  stats={stats.segments[0].stats}
                  activeLegend={stats.segments[1]}
                />
              </div>
              <button className="returnBtn" onClick={onClick}>
                Return
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Profilecs;
