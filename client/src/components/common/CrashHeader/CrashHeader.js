import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort'
import './CrashHeader.css'
import { SwipeableDrawer, Box, List, ListItem, Drawer } from "@material-ui/core";
function CrashHeader() {
  const [right, setRight] = React.useState(false);
  const history = useHistory();
    return (
        <div>
            <div className="crash-header">
          <ArrowBackIosIcon
            style={{
              border: "1px solid gainsboro",
              borderRadius: "100%",
              padding: "5px 10px",
              fontSize: "45px",
              color: "gray",
              cursor: "pointer",
            }}
          />
          <Button>IIT Crash Course</Button>
          <SortIcon style={{
              fontSize: "35px",
              color: "gray",
              cursor: "pointer",marginTop:'4px'}} id='sort-icon' fontSize='large'
              onClick={()=>setRight(true)}
              />
              <Drawer
            anchor='right'
            open={right}
            onClose={()=>setRight(false)}
            onOpen={()=>setRight(true)}
            className='drawer-pro'
          >
             <Box
                sx={{ width : 250 }}
                role="presentation"
                onClick={()=>setRight(false)}
                onKeyDown={()=>setRight(false)}
              >
                <List>
                  <ListItem  onClick={() => window.location = '/'}>Home</ListItem>
                  <ListItem onClick={() => history.push('/calender')} >Schedule</ListItem>
                  <ListItem  >My Enrollment</ListItem>
                  <ListItem onClick={() => history.push('/iitjee/syllabus')} >Syllabus</ListItem>
                  <ListItem onClick={() => history.push('/iitjee/livetest')} >Live Test & Quizzes</ListItem>
                  <ListItem onClick={() => history.push('/iitjee/buycourse')} >Buy Course</ListItem>
                </List>
                </Box>
            </Drawer>
        </div>
        <div className="header-title">
          <h1>IIT Crash Course</h1>
          <Button>Subscribed</Button>
        </div>
        </div>
    )
}

export default CrashHeader
