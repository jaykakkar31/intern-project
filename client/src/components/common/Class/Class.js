import React from 'react'
import './Class.css'
function Class({name, subject, time, topic, img}) {
    return (
        <div className='class-course'>
            <div className='class-def'>
                <div>
                 <img src={img} alt/>
                </div>
                <div className='right-def'>
                    <h1>{name}</h1>
                    <h3>{subject}</h3>
                    <p>{time}</p>
                </div>
            </div>
            <p>{topic}</p>
            <div className='join-bt'>
            <button className='btn btn-primary'>Join Class</button>
            </div>
        </div>
    )
}

export default Class
