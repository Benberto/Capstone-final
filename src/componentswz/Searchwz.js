import Form from './Formwz'
import React from 'react'
function Searchwz({pcPlatform, platforms}) {
    document.body.className = "warzone-container";
    return (
    <div className="search-container">
        <div className="header">
            <h1>Track Player Stats</h1>
        </div>
        <Form pcPlatform = {pcPlatform} platforms={platforms}/>
    </div>
    )
}


export default Searchwz