import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
	return (
		<div className="iezal-home">
			<div className="iezal-home-sec-1">
				<div className="home1">
					<img className="img1" src="images/home-1.png" />
				</div>

				<div className="i-h-s-1-1">
					<h1>Welcome to India's first </h1>
					<h1>
						<span>AI enabled</span> Learning platform
					</h1>
					<div className="btn-holder">
						<Link to="/students/login" className="home-link1 home-l-1-1">
							<Button variant="contained" color="primary" disableElevation>
								For Students
							</Button>
						</Link>
						<Link to="/educator/login" className="home-link1 home-l-1-1">
							<Button variant="contained" color="primary" disableElevation>
								For Educators
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className="iezal-home-sec-2">
				<div className="i-h-s-1-1">
					<h1>
						Better Learning For <span>Better Results.</span> Let’s Ace it !
					</h1>
					<Link to="/courses" className="home-link1">
						<Button variant="contained" color="primary" disableElevation>
							Competitive Exam
						</Button>
					</Link>
				</div>

				<div className="home-2">
					<img src="images/home-2.png" />
				</div>
			</div>

			<div className="iezal-home-sec-3 iezal-home-sec-1">
				<div className="home3">
					<img src="images/home-3.png" />
				</div>
				<div className="i-h-s-1-1">
					<h1 className="school">
						Complete online learning for <span>Schools Exam.</span>
					</h1>
					<Link to="/courses?track=2" className="home-link1">
						<Button variant="contained" color="primary" disableElevation>
							School Classes
						</Button>
					</Link>
				</div>
			</div>
			<div className="iezal-home-sec-2 iezal-home-sec-4">
				<div className="i-h-s-1-1">
					<h1>
						Find contents of your <span>Dream Institutes</span>
					</h1>
					<Link to="/courses?track=3" className="home-link1">
						<Button variant="contained" color="primary" disableElevation>
							Explore Institutes
						</Button>
					</Link>
				</div>
				<div className="home-4">
					<img src="images/home-4.png" />
				</div>
			</div>
			<div className="i-home-tiles">
				<div>
					<img src="images/home-liveclass.png" alt />
					<div>
						<h2>Daily Classes</h2>
						<p> Feels like you are in the classroom.</p>
						<p> Learn and chat with expert educators.</p>
					</div>
				</div>
				<div>
					<img src="images/home-ai.png" alt />
					<div>
						<h2>AI enabled</h2>
						<p> India’s first AI enabled system.</p>
						<p>
							{" "}
							See your growth with <span>AI visualization</span>
						</p>
					</div>
				</div>
				<div>
					<img src="images/home-int.png" alt />
					<div>
						<h2>Interactive Classes</h2>
						<p> Intract with Teachers you want</p>
						<p>
							{" "}
							Get your <span>Doubts</span> cleared.
						</p>
					</div>
				</div>
			</div>

			<div className="i-adv">
				<img src="images/home-adv.png" alt />
				<div>
					<h2>
						Learn Anytime Anywhere with <img src="images/logo.png" alt />
					</h2>
					<img src="images/google-play.png" alt />
				</div>
			</div>

			<div className="home-feedback">
				<h1>Our Loved Students</h1>
				<Carousel
					responsive={{
						desktop: {
							breakpoint: { max: 4000, min: 0 },
							items: 1,
						},
					}}
					className="caro-d"
				>
					<div className="caro-d-sub">
						<h2>Hansika</h2>
						<p>
							IEZAL is an excellent learning platform, according to Hansika, she
							believes that grasping concepts is essential to actual learning.
							IEZAL video lessons and doubt clearing are very good. It makes you
							feel like you are in a real classroom. I loved their amazing
							features which ease your work . I suggest others join this amazing
							platform and see your growth accordingly
						</p>
						<h4></h4>
						<h5></h5>
					</div>

					<div className="caro-d-sub">
						<h2>Harsh Sinha</h2>
						<p>
							Harsh Sinha, a 12th grade student, says that IEZAL has been really
							beneficial in providing the correct foundation for learning topics
							while also being quite easy. I love the Artificial Intelligence
							feature which helps me to see my performance, my activeness in the
							class. I appreciate you all joining the class once and feel the
							difference
						</p>
						<h4></h4>
						<h5></h5>
					</div>
					<div className="caro-d-sub">
						<h2>Om Gholap</h2>
						<p>
							Om Gholap, a student in the 12th grade, It was my first E-learning
							platform, and I had a great time with it. It's extremely easy to
							use, and the teachers are very nice and explain things well. I
							also liked the management team because they know everything about
							the curriculum. I also encourage people to join and experience the
							uniqueness
						</p>
						<h4></h4>
						<h5></h5>
					</div>
					<div className="caro-d-sub">
						<h2>Priyanka Verma</h2>
						<p>
							Priyanka Verma, a student of class 11th , describes her
							experience: "I love how IEZAL software has eased my learning." She
							appreciates interactive classes in her learning sessions. She also
							appreciates her teachers' knowledge-based teaching techniques.
						</p>
						<h4></h4>
						<h5></h5>
					</div>
				</Carousel>
			</div>
		</div>
	);
}

export default Home;
