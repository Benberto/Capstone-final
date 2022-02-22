import { useState } from "react";
import React from "react";
// import Button from "./Buttoncs";
import { useNavigate } from "react-router-dom";
function Formcs({ pcPlatform, platforms }) {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState(pcPlatform);
  const [gamertag, setGamertag] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`api/v2/profile/${platform}/${gamertag}`);
  };
  const onChangePlatform = (event) => {
    setPlatform(event.target.value);
  };
  const onChangeGamertag = (event) => {
    setGamertag(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="platform">
        <label htmlFor="platform">Platform</label>
        <select
          className="select-platform"
          id="platform"
          value={platform}
          onChange={onChangePlatform}
        >
          <option value="steam">{pcPlatform}</option>
        </select>
      </div>
      <div className="gamertag">
        <label htmlFor="gamertag">Gamertag</label>
        <input
          value={gamertag}
          onChange={onChangeGamertag}
          type="text"
          id="gamertag"
          className="select-gamertag"
          placeholder={platforms}
          required
        ></input>
        <p>Example: SmokingHoneydew</p>
      </div>
      <button className="animated-button1" style={{ width: "97%" }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
      {/* <Button/> */}
    </form>
  );
}

export default Formcs;
