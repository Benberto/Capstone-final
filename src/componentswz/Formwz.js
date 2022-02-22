import { useState } from 'react';
import React from 'react'
// import Buttonwz from './Buttonwz';
import {useNavigate} from 'react-router-dom'
function Formwz({pcPlatform, platforms}) {
    const navigate = useNavigate();
    const [platform, setPlatform] = useState(pcPlatform);
    const [gamertag, setGamertag] = useState('');
 
    const onSubmit = (event) =>{
        event.preventDefault();
        navigate(`api/v3/profile/${platform}/${gamertag}`);
    };
    const onChangePlatform = (event) =>{
        setPlatform(event.target.value);
    }
    const onChangeGamertag = (event) =>{
        setGamertag(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="platform">
                <label htmlFor="platform">Platform</label>
                <select className='select-platform' id='platform' value={platform} onChange={onChangePlatform}>
                    <option value='steam'>{pcPlatform}</option>
                    <option value='psn'>Playstation</option>
                    <option value='xbl'>Xbox</option>
                </select>
                
            </div>
            <div className="gamertag">
                <label htmlFor="gamertag">Gamertag</label>
                <input value = {gamertag} onChange={onChangeGamertag} type='text' id='gamertag' className='select-gamertag' placeholder={platforms} required></input>
                <p>SteamID Ex: 76561197998266342</p>
            </div>
            <button className="animated-button1" style={{ width: "97%" }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
            {/* <Buttonwz/> */}
        </form>
    )
}


export default Formwz