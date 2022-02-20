
import { useState } from 'react';
import React from 'react'
import Button from './Buttonwz';
import {useNavigate} from 'react-router-dom'

function Formwz({pcPlatform, platforms}) {
    const navigate = useNavigate();
    const [platform, setPlatform] = useState('');
    const [gamertag, setGamertag] = useState('');
 
    const onSubmit = (event) =>{
        event.preventDefault();
        navigate(`api/warzone/${gamertag}/battle`);
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
                    <option value='battle'>BattleNET</option>
                    <option value='acti'>Activision</option>
                    <option value='psn'>Playstation</option>
                    <option value='xbl'>Xbox</option>
                </select>
                
            </div>
            <div className="gamertag">
                <label htmlFor="gamertag">Gamertag</label>
                <input value = {gamertag} onChange={onChangeGamertag} type='text' id='gamertag' className='select-gamertag' placeholder={platforms} required></input>
                <p>Example: SmokingHoneydew</p>
            </div>
            <Button/>
        </form>
    )
}


export default Formwz