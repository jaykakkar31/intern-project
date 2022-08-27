import React from 'react'
import './UpcomingClass.css'
function UpcomingClass({image,topic,time,subject}) {
    return (
        <div className='upcoming'>
            <img src={image} alt/>
            <p>{topic}</p>
            <div className='test-time'>
                <p className='main-time'>{time}</p>
                <p>{subject}</p>
            </div>
            <div className='join-bt' id='live-bt'>
                <button className='btn btn-primary'>Join Class</button>
           </div>
        </div>
    )
}

export default UpcomingClass
