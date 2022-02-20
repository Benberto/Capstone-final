import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
  return(
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/apex-legends-tracker'>Apex legends Tracker</Link></li>
        <li><Link to='/warzone-tracker'>Warzone Tracker</Link></li>
        <li><Link to='/csgo-tracker'>CS:GO Tracker</Link></li>

    </ul>
  )
}

export default NavBar;