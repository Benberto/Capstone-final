import React from 'react'

function StatTablecs({overview, stats}) {
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
                </div>
                {legendStats} 
            </div>  
       
    )
}

export default StatTablecs