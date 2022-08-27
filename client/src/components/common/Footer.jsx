import React from "react";
import { Link,useHistory } from "react-router-dom";
import './Footer.scss'
import {Facebook, Instagram, LinkedIn, Twitter, YouTube} from '@material-ui/icons'
const Footer = ({student,educator}) => {
  const history = useHistory();
  return (
		<footer>
			<div class="sub-footer">
				<div className="left-footer">
					<img
						onClick={() =>
							history.push(
								student._id || educator._id
									? student._id
										? "/courses"
										: "/educator"
									: "/"
							)
						}
						src="images/logo.png"
						alt="IEZAL"
						height="40px"
						width="80px"
					/>
					<p>Our mission to give best platform to student</p>
					<p>for education and acheive their goals</p>
				</div>
				<div>
					<h5>Company</h5>
					<ul>
						<li>
							<Link
								to={
									student._id || educator._id
										? student._id
											? "/courses"
											: "/educator"
										: "/"
								}
							>
								Home
							</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
						<li>
							<Link to="/privacypolicy">Privacy Policy</Link>
						</li>
					</ul>
				</div>
				<div>
					<h5>Our Goals</h5>
					<ul>
						<li>
							<Link to="/courses?track=1">Competitive Exam</Link>
						</li>
						<li>
							<Link to="/courses?track=2">School Classes</Link>
						</li>
					</ul>
				</div>
				<div className="right-footer">
					<img width="180px" src="images/google-play.png" alt />
					<div className="footer-icons">
						<a
							href="https://www.facebook.com/IEZAL-108712788034078/"
							target="_blank"
						>
							{" "}
							<Facebook />
						</a>
						<a href=" https://www.instagram.com/iezaloffical/" target="_blank">
							{" "}
							<Instagram />
						</a>{" "}
						<a
							target="_blank"
							href="https://in.linkedin.com/company/iezal
"
						>
							{" "}
							<LinkedIn />
						</a>{" "}
						<a href="https://twitter.com/iezaloffical/" target="_blank">
							{" "}
							<Twitter />
						</a>
						<YouTube />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
