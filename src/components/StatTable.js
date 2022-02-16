import React from 'react'

function StatTable({overview, stats, activeLegend}) {
   let i = 0;
   let legendStats = Object.entries(stats).map(([key, value]) => {
       i += 1;
       if (i <=4){
        return (
            <div key={i} className='stat'>
               <p className = 'stat-name' >{value.displayName}</p>
               <p className = 'stat-value'>{value.displayValue}</p>
            </div>
        )
       }
    }
    );
   

    return (      
            <div className='legend-stats'>
                <div>
                    <div className = 'stat'>
                        <p className = 'stat-name'>Selected Legend</p>
                        <p className = 'stat-value'>{activeLegend.metadata.name}</p>
                    </div>
                </div>
                {legendStats} 
            </div>  
       
    )
}

export default StatTable