import React from 'react'
import './UpcomingVideoClasses.css'
import TimerIcon from '@material-ui/icons/Timer';
import { Button } from '@material-ui/core';
function UpcomingVideoClasses({islive}) {
    return (
        <div className='upcoming-vid-class'>
            {
                islive?<Button>Live</Button>:<p><TimerIcon fontSize='small'/> 6h 25m</p>
            }
            
            <div className='main-upcoming-vid-class'>
                <div className='left-main-u-v-c'>
                    <img height='125' src='https://manycam.com/blog/wp-content/uploads/2020/08/Blog-online-education-background-ideas.png' alt/>
                    <div>
                        <p>1h 40m</p>
                        <p>English</p>
                    </div>
                    <p>2k enroll</p>
                </div>

                <div className='right-main-u-v-c'>
                    <h6>Basic fundamental of Geometry and Trignometry</h6>
                    <h5>Robert Josh</h5>
                    <p>Maths</p>
                   {
                       islive?<Button>Watch Now</Button> : <Button>Notify Me</Button>
                   }
                </div>
            </div>
        </div>
    )
}

export default UpcomingVideoClasses
