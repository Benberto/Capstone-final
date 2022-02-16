import Form from './Form'
import React from 'react'
function Search({pcPlatform, platforms}) {
    document.body.className = "body-bg-image";
    return (
    <div className="search-container">
        <div className="header">
            <h1>Track Player Stats</h1>
        </div>
        <Form pcPlatform = {pcPlatform} platforms={platforms}/>
    </div>
    )
}


export default Search