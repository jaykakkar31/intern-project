import React from 'react'
import './Test.css'
function Test({topic, time,subject,duration}) {
    return (
        <div className='test'>
            <p className='topic'>{topic}</p>
            <div className='test-time'>
                <p className='main-time'>{time}</p>
                <p>{subject}</p>
            </div>
            <p className='test-dur'>Estimated Time : {duration}</p>
            <div className='join-bt' id='live-bt'>
                <button className='btn btn-primary'>Join Test</button>
           </div>
        </div>
    )
}

export default Test
