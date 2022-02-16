import Search from './components/Search'
import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import {BroswerRouter as Router, Route, Routes} from 'react-router-dom'
import { StatProvider } from './StatProvider'
function App() {
  return (
    <div className='no-background-image'>
        <StatProvider>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Search pcPlatform ='origin' platforms= 'Origin Id, PSN ID, Xbox Gamertag'/>} />
            <Route exact path='/profile/:platform/:gamertag' element={<Profile/>}/>
          </Routes>
        </StatProvider>
    </div>
  );
}

export default App;