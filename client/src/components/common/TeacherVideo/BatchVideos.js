import React from 'react'
import './BatchVideos.css'
function BatchVideos({batch}) {
    return (
        <div className='batch-video'>
            <h1>Batch {batch}</h1>
            <div>
            <img src='https://i.ytimg.com/vi/eoo7MlOlyBc/maxresdefault.jpg' alt/>
            </div>
            
            <div>
              <p>Last updated on Jul 14 2021</p>
            </div>
            
        </div>
    )
}

export default BatchVideos
