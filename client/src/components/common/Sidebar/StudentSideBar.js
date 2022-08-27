import React, { useState } from 'react'
import {
      NavLink
  } from 'react-router-dom';
import './StudentSideBar.css'
function StudentSideBar() {
   
    return (
        <div className='student-sideBar'>
            <h1>IIT Crash Course</h1>
            <div>
              <h3><NavLink exact to='/iitjee' activeClassName="active1" className='link'>Home</NavLink></h3> 
               <h3><NavLink to='/calender' activeClassName='active1' className='link'>Schedule</NavLink></h3>
               <h3><NavLink to='/iitjee/enrollment' activeClassName='active1' className='link'>Enrollment</NavLink></h3>
               <h3><NavLink to='/iitjee/syllabus' activeClassName='active1' className='link'>Syllabus</NavLink></h3>
               <h3><NavLink to='/iitjee/livetest' activeClassName="active1" className='link'>Live Test & Quizzes</NavLink></h3>
               <h3><NavLink to='/iitjee/buycourse' activeClassName="active1" className='link'>Buy Course</NavLink></h3>  
            </div>
        </div>
    )
}

export default StudentSideBar
