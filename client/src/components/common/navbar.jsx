import React,{useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Logout from "../StudentAuth/Logout";
import iezal from '../../images/logo.png'
import {
	Box,
	Button,
	ClickAwayListener,
	Divider,
	Drawer,
	List,
	ListItem,
	Paper,
	Popover,
	Popper,
	Typography,
} from "@material-ui/core";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./navbar.scss";
import SortIcon from "@material-ui/icons/Sort";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
const NavBar = ({ student, educator }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [menu, setMenu] = React.useState(false);
	const [anchor, setAnchor] = React.useState(null);
	const [top, setTop] = React.useState(false);
	const history = useHistory();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((prev) => !prev);
	//	setMenu(false);
	};
	const handleClick1 = (event) => {
		setAnchor(event.currentTarget);
		setMenu((prev) => !prev);
		//setOpen(false);
	};
      const closemenu = () => {
				setMenu(false);
			};
	
	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false)
	};
	//navbar small tab
	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setTop(open);
	};
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setMenu(false);
	// 	}, 5000);
	// }, [menu]);
	return (
		<nav className="iezal-nav">
			<div
				onClick={() =>
					history.push(
						student._id || educator._id
							? student._id
								? "/courses"
								: "/educator"
							: "/"
					)
				}
				className="iezal-brand"
			>
				<img src="images/logo.png" alt="IEZAL" height="34px" width="71px" />
			</div>
			<div className="iezal-nav-items">
				<ul>
					<li id="iezal-res-1">
						<NavLink
							onClick={closemenu}
							to={
								student._id || educator._id
									? student._id
										? "/courses"
										: "/educator"
									: "/"
							}
						>
							Home
						</NavLink>
					</li>
					<li id="iezal-res-1">
						<NavLink onClick={closemenu} to="/about">
							About Us
						</NavLink>
					</li>
					<li id="iezal-res-1">
						<NavLink onClick={closemenu} to="/contact">
							Contact
						</NavLink>
					</li>
					<li id="iezal-res-1" style={{ cursor: "pointer" }}>
						<img
							onClick={handleClick1}
							alt="squared-menu"
							src="https://img.icons8.com/material-sharp/24/000000/squared-menu.png"
						/>
						{menu && (
							<ClickAwayListener onClickAway={closemenu}>
								<Popper
									id="customized-menu"
									anchorEl={anchor}
									keepMounted
									open={menu}
								>
									{" "}
									<Paper style={{ marginTop: "10px" }}>
										<MenuItem style={{ padding: "14px 20px" }}>
											{/* <CalendarTodayIcon style={{margin:'0px 0px 10px 12px',fontSize:'30px'}}/> */}
											<ListItemText
												onClick={() => {
													student._id || educator._id
														? history.push("/calender")
														: history.push("/students/login");
													setMenu(false);
												}}
												primary="Calender"
											/>
										</MenuItem>
									</Paper>
								</Popper>
							</ClickAwayListener>
						)}
					</li>
					{(student._id || educator._id) && (
						<li id="iezal-res-1">
							<NotificationsOutlinedIcon style={{ fontSize: "28px" }} />
						</li>
					)}
					{student._id || educator._id ? (
						<li>
							<AccountCircleIcon
								onClick={handleClick}
								style={{ fontSize: "28px" }}
							/>
							​{" "}
							{open && (
								<ClickAwayListener onClickAway={handleClose}>
									<Popper
										id="customized-menu"
										anchorEl={anchorEl}
										keepMounted
										open={open}
									>
										{" "}
										<Paper style={{ marginTop: "10px" }}>
											<MenuItem id="iezal-clas-res">
												<ListItemText
													onClick={() => {
														history.push(
															student._id || educator._id
																? student._id
																	? "/courses"
																	: "/educator"
																: "/"
														);
														setOpen(false);
													}}
													primary="Home"
												/>
											</MenuItem>
											<MenuItem id="iezal-clas-res">
												<ListItemText
													onClick={() => {
														history.push("/about");
														setOpen(false);
													}}
													primary="About Us"
												/>
											</MenuItem>
											<MenuItem id="iezal-clas-res">
												<ListItemText
													onClick={() => {
														history.push("/contact");
														setOpen(false);
													}}
													primary="Contact"
												/>
											</MenuItem>
											<MenuItem>
												<ListItemText
													onClick={() => {
														student._id
															? history.push("/me")
															: history.push("/educator/profile");
														setOpen(false);
													}}
													primary="My profile"
												/>
											</MenuItem>
											<MenuItem>
												<ListItemText primary="My subscription" />
											</MenuItem>
											<MenuItem>
												<ListItemText primary="Notification" />
											</MenuItem>
											<MenuItem>
												<ListItemText
													onClick={() => {
														student._id
															? history.push("/me")
															: history.push("/educator/settings");
														setOpen(false);
													}}
													primary="Settings"
												/>
											</MenuItem>
											<MenuItem>
												<ListItemText
													onClick={() => {
														localStorage.removeItem("token");
														localStorage.removeItem("educatorToken");
														window.location = "/";
														setOpen(false);
													}}
													primary="Logout"
												/>
											</MenuItem>
										</Paper>
									</Popper>
								</ClickAwayListener>
							)}
						</li>
					) : (
						<li id="login-sty">
							<Button
								id="iezal-login-big"
								variant="contained"
								color="primary"
								disableElevation
								style={{ padding: "2px 14px", textTransform: "capitalize" }}
							>
								<NavLink
									to="/students/login"
									style={{ color: "white", fontSize: "16px" }}
								>
									Login
								</NavLink>
							</Button>
							​
							<SortIcon
								id="iezal-login-small"
								onClick={toggleDrawer(true)}
								style={{
									marginTop: "-3px",
									marginRight: "-1rem",
									fontSize: "28px",
								}}
							/>
							<Drawer anchor="top" open={top} onClose={toggleDrawer(false)}>
								<Box
									style={{ width: "auto", backgroundColor: "rgb(237 248 235)" }}
									role="presentation"
									onClick={toggleDrawer(false)}
									onKeyDown={toggleDrawer(false)}
								>
									<List className="iezal-box-list">
										<ListItem>
											<NavLink
												to={
													student._id || educator._id
														? student._id
															? "/courses"
															: "/educator"
														: "/"
												}
											>
												Home
											</NavLink>
										</ListItem>
										<ListItem>
											{" "}
											<NavLink to="/about">About Us</NavLink>
										</ListItem>
										<ListItem>
											<NavLink to="/contact">Contact</NavLink>
										</ListItem>
										<ListItem>
											<NavLink
												to="/students/login"
												style={{ color: "grey", fontSize: "16px" }}
											>
												Login / Register
											</NavLink>
										</ListItem>
									</List>
								</Box>
							</Drawer>
						</li>
					)}
					​
					{/* <li className='iezal-bar'>
             
          </li> */}
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;