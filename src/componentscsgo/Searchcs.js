import Form from './Formcs'
import React from 'react'
function Searchcs({pcPlatform, platforms}) {
    document.body.className = "csgo-container";
    return (
    <div className="search-container">
        <div className="header">
            <h1>Track Player Stats</h1>
        </div>
        <Form pcPlatform = {pcPlatform} platforms={platforms}/>
    </div>
    )
}


export default Searchcs