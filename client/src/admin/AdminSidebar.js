import React, { useEffect, useState } from "react";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import InboxIcon from '@material-ui/icons/Inbox';
import TocIcon from "@material-ui/icons/Toc";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import './AdminSidebar.css'
import { NavLink } from "react-router-dom";
function AdminSidebar({height}) {
    const [hide, setHide] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768 ) setHide(true);
  }, []);
    return (
        <>
      {!hide ? (
        <div className="educator-sidebar t-side" style={{minWidth: "18%", height}}>
          <div class="educator-link t-link">
            <div className="educator-icon">
              <ClearAllIcon
                style={{ fontSize: "40px" }}
                cursor="pointer"
                onClick={() => setHide((prev) => !prev)}
              />
            </div>
            <h3> 
            <NavLink
                exact
                to="/educator/admin/adminhome/inbox"
                activeClassName="active2"
                className="teach-bar"
              >         
                <InboxIcon className='side-12'/>Inbox
              </NavLink>
            </h3>
            <h3>
            <NavLink
                exact
                to="/educator/admin/adminhome/starred"
                activeClassName="active2"
                className="teach-bar"
              >
                <StarIcon className='side-12'/> Starred
             </NavLink>
            </h3>
            <h3>
            <NavLink
                exact
                to="/educator/admin/adminhome/sent"
                activeClassName="active2"
                className="teach-bar"
              >         
                <SendIcon className='side-12'/> Sent
              </NavLink>
            </h3>
          </div>
        </div>
      ) : (
        <div className="educator-sidebar" style={{height}}>
          <div class="educator-link">
            <div className="educator-icon" style={{ textAlign: "center" }}>
              <TocIcon
                cursor="pointer"
                onClick={() => setHide((prev) => !prev)}
              />
            </div>
            <h3>
             
                <InboxIcon/>
              
            </h3>
            <h3>
             
                <StarIcon />
         
            </h3>
            <h3>
             
                <SendIcon />
            
            </h3>
            <h3>
             
                <DraftsIcon />
            </h3>
          </div>
        </div>
      )}
    </>
    )
}

export default AdminSidebar
