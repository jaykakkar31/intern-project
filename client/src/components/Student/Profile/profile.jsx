import React, { useState } from "react";
import "./profile.scss";
import Details from "./studentDetails";
import Subscription from "./Subscription";
import Notifications from "./Notifications";
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIosOutlined';
import SortIcon from '@material-ui/icons/Sort'
import { SwipeableDrawer, Box, List, ListItem, Drawer } from "@material-ui/core";
function Profile({ student }) {
  const [selected, setSelected] = useState("Profile");
  const [right, setRight] = useState(false);
  const subscriptions = [
    {
      id: 1,
      courseName: "IIT Crash Course",
      p1: "6 months Subscription access for IITJEE Course",
      p2: "Remaining Time: 3 months 2 days",
      price: 6999,
    },
    {
      id: 2,
      courseName: "IIT Crash Course",
      p1: "6 months Subscription access for IITJEE Course",
      p2: "Remaining Time: 3 months 2 days",
      price: 6999,
    },
  ];
  return (
    <div className="container">
       <div className='profile-header'>
          <ArrowBackIosNewIcon fontSize='small'/>
          <h2>{selected}</h2>
          <SortIcon style={{cursor:'pointer'}} onClick={()=>setRight(true)}/>
            {/* Mobil view side drawer */}
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
                  <ListItem  onClick={() => setSelected("Profile")}>My Profile</ListItem>
                  <ListItem  onClick={() => setSelected("Notifications")}>Notification</ListItem>
                  <ListItem  onClick={() => setSelected("Subscriptions")}>My Subscription</ListItem>
                </List>
                </Box>
            </Drawer>
      </div>
      <div className="row">
        <div className="col-4">
          <ul className="nav flex-column">
            <li className="navbar-brand">Settings</li>
            <li className="nav-item">
              <a
                className={
                  selected === "Profile" ? "nav-link selected" : "nav-link"
                }
                onClick={() => setSelected("Profile")}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  selected === "Subscriptions"
                    ? "nav-link selected"
                    : "nav-link"
                }
                onClick={() => setSelected("Subscriptions")}
              >
                My Subscriptions
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  selected === "Notifications"
                    ? "nav-link selected"
                    : "nav-link"
                }
                onClick={() => setSelected("Notifications")}
              >
                Notifications
              </a>
            </li>
          </ul>
        </div>
        <div className="col-8">
          {selected === "Profile" && <Details student={student} />}
          {selected === "Subscriptions" && (
            <Subscription subscriptions={subscriptions} />
          )}
          {selected === "Notifications" && <Notifications student={student} />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
