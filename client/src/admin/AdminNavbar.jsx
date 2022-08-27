import React from 'react'
import './AdminNavbar.scss'
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
function AdminNavbar() {
    return (
        <nav className="iezal-nav">
			<div
				className="iezal-brand"
			>
				<img src="/images/logo.png" alt="IEZAL" height="34px" width="71px" />
			</div>
			<div className="iezal-nav-items">
				<ul>
					<li className='search-se'>
						<SearchIcon style={{marginRight:'-30px', zIndex:'2',color:'grey'}}/>
						<input placeholder='Search' type='text'/>
					</li>
					<li id="iezal-res-1" style={{ cursor: "pointer"}}>
						<img
							//onClick={handleClick1}
							alt="squared-menu"
							src="https://img.icons8.com/material-sharp/24/000000/squared-menu.png"
						/>
					</li>
						<li id="iezal-res-1">
							<NotificationsOutlinedIcon style={{ fontSize: "28px" }} />
						</li>
						<li>
							<AccountCircleIcon
								//onClick={handleClick}
								style={{ fontSize: "28px" }}
							/>
						</li>
					
				</ul>
			</div>
		</nav>
    )
}

export default AdminNavbar
