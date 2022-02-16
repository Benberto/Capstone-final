
import { useState } from 'react';
import React from 'react'
import Button from './Button';
import {useNavigate} from 'react-router-dom'
function Form({pcPlatform, platforms}) {
    const navigate = useNavigate();
    const [platform, setPlatform] = useState(pcPlatform);
    const [gamertag, setGamertag] = useState('');
 
    const onSubmit = (event) =>{
        event.preventDefault();
        navigate(`/profile/${platform}/${gamertag}`);
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
                    <option value='origin'>{pcPlatform}</option>
                    <option value='psn'>Playstation</option>
                    <option value='xbl'>Xbox</option>
                </select>
                <p>Example: Playstation</p>
            </div>
            <div className="gamertag">
                <label htmlFor="gamertag">Gamertag</label>
                <input value = {gamertag} onChange={onChangeGamertag} type='text' id='gamertag' className='select-gamertag' placeholder={platforms} required></input>
                <p>Example: ShamR0cks978</p>
            </div>
            <Button/>
        </form>
    )
}


export default Form