import React from 'react'
import {useParams} from 'react-router-dom'
import {StatContextwz} from '../StatProviderwz'
import {FaPlaystation, FaWindows, FaXbox} from 'react-icons/fa'
import StatTablewz from './StatTablewz'
import {useNavigate} from 'react-router-dom'

function Profilewz() {
    const navigate = useNavigate();
    document.body.className = "warzone-container"
    const {platform, gamertag} = useParams();
    const context = React.useContext(StatContextwz);
    let stats = context.state.profileData
    
    
    React.useEffect(() => {
        context.getStats(platform, gamertag)
    }, [])

    const onClick = () => {
        context.resetState()
        navigate(`/splitgate-tracker`);
    }
    if(context.state.loading === true){
        return (
        <div className='loading'>
            <h1>Loading...</h1>
        </div>
        )
    }
    else if(context.state.loading === false && context.state.error === true){
        return (
            <div className='error'>
                <div className='errorMsg'>
                    <h1>{context.state.errorRes}</h1>
                    <button className = 'returnBtn' onClick={onClick}>Return</button>
                </div>
            </div>
            
            )
    }
    else return (
        <>
           {/* <div className='legend-img'>
                <img src={stats.segments[1].metadata.imageUrl} alt=""/>
            </div> */}
            <div className = 'splitgate-player-profile'>
              <div className="spartan-img">

              </div>

                <div className='stats'>
                    <div className='header'>
                        <div className='player-profile-img'>
                            <div className='player-profile-img-circle'>
                                <img src={stats.platformInfo.avatarUrl} alt=''/>
                            </div>
                        </div>
                        <div className='title'>
                            <h1>{stats.platformInfo.platformUserHandle}</h1>
                            {stats.platformInfo.platformSlug === 'steam' ? <FaWindows className='platform-icon' />
                            : stats.platformInfo.platformSlug === 'psn' ? <FaPlaystation className='platform-icon' />
                            : <FaXbox className='platform-icon'/>}
                        </div>
                        <div className="legend-stat-container">
                            <StatTablewz overview={stats.segments[0]} stats = {stats.segments[0].stats} activeLegend={stats.segments[1]}/>
                            
                        </div>
                        <button className = 'returnBtn' onClick={onClick}>Return</button>
                    </div>
  
                </div>
            </div>
        </>
        )
    

}


export default Profilewz