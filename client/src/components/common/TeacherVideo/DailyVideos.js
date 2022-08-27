import React from 'react'
import './DailyVideos.css'
function DailyVideos() {
    return (
        <div className='daily-videos'>
            <img src='https://i.ytimg.com/vi/1xj0MC2IuDU/maxresdefault.jpg' alt/>
            <div>
                <div className='daily-videos-l'>
                 <h2>Quantum Physics</h2>
                 <p>Batch timing: 04:00 pm - 05:00 pm</p>
                 <p>Batch code : xyz123</p>
                </div>
                <div>
                    <p>58:57</p>
                    <p>July 14 2021</p>
                </div>
            </div>
        </div>
    )
}

export default DailyVideos
