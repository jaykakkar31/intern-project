import React from 'react'
import './CourseSyllabus.css'
function CourseSyllabus({title,description,duration}) {
    return (
        <div className='course-sub'>
            <h1>{title}</h1>
            <p>{description}</p>
            <p className='course-time'>Estimated Time : {duration}</p>
        </div>
    )
}

export default CourseSyllabus
