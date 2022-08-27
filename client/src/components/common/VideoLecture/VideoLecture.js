import React, { useState } from "react";
import "./VideoLecture.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";
import Video from "../VideoPlayer/videoPlayer";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import UpcomingVideoClasses from "../UpcomingVideoClasses/UpcomingVideoClasses";
function VideoLecture({ id }) {
	const [hideChat, setHideChat] = useState(false);
    console.log(id);
	return (
		<div className="video-lecture">
			<div className="left-video-lecture">
				<div className="head-l-vid-lec">
					<ArrowBackIcon
						fontSize="large"
						style={{
							border: "1px solid #E5E5E5",
							color: "grey",
							borderRadius: "20px",
							padding: "5px",
						}}
					/>
					<Button>Live</Button>
				</div>
				<div>
					<Video id={id} />
				</div>
				<div className="about-video-lec">
					<h3>
						Basic Fundamental of Organic Chemistry <span>(English)</span>
					</h3>
					<p>
						In this class you learn the basic fundamental of organic chemistry.
						Organic chemistry is related with environment and how to control the
						need of user.
					</p>
				</div>
				<div className="info-video-creator">
					<img
						height="53"
						src="https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg"
						alt
					/>
					<div>
						<h4>Robert woges</h4>
						<p>Chemistry</p>
					</div>
					<div className="vid-intro-r">
						<h5>1h 30min</h5>
						<h6>25k views</h6>
					</div>
				</div>
			</div>
			<div className="right-video-lecture">
				<div className="chat-container">
					<div className="top-container">
						<span className="top-c-live">Live chat</span>
						<span className="hide" onClick={() => setHideChat((prev) => !prev)}>
							{hideChat ? "Show Chat" : "Hide Chat"}
						</span>
					</div>
					{!hideChat && (
						<div>
							<div className="chatting-container">
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>
										Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
										ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
									</span>
								</div>
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>{" "}
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>{" "}
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>{" "}
								<div className="chat">
									{" "}
									<img src="/images/sunset.jpg" alt="img" />
									<span>Lorem ipsum</span>
								</div>
							</div>
							<div className="input-messg-container">
								<div className="input-msg-c-left">
									<img src="/images/sunset.jpg" alt="img" />
								</div>
								<div className="input-msg-c-right">
									<label>Name</label>
									<input placeholder="Ask questions ?" />
									<div className="icons">
										<InsertEmoticonIcon />
										<AttachFileIcon className="attach" />
										<SendIcon className="send" />
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="more-video-lecture">
					<div className="head-more-vid-lec">
						<h4>More classes for you</h4>
						<div className="container-for-headers">
							<Button className="class-active">All</Button>
							<Button>Live</Button>
							<Button>Upcoming</Button>
						</div>
					</div>

					<UpcomingVideoClasses islive="true" />
					<UpcomingVideoClasses />
					<UpcomingVideoClasses islive="true" />
					<UpcomingVideoClasses islive="true" />
					<UpcomingVideoClasses islive="true" />
				</div>
			</div>
			{/* temporary chat container */}
		</div>
	);
}

export default VideoLecture;
