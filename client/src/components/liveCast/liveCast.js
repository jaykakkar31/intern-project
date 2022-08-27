import "./liveCast.css";
import Footer from "./footer/footer";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import io from "socket.io-client";
import Peer from "simple-peer";
import axios from "axios";
import { deleteId } from "../../services/api";
const shortid = require("shortid");
import moment from "moment";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import UpcomingVideoClasses from "../common/UpcomingVideoClasses/UpcomingVideoClasses";

import { getEducatorDetails } from "../../services/api";

const LiveCast = ({ setJoinDisable, setDisable }) => {
	const history = useHistory();

	const userVideo = useRef();
	const ssVideo = useRef();
	const [streamObj, setStreamObj] = useState();
	const socketRef = useRef();
	const { id } = useParams();
	const peersRef = useRef([]);
	const [peers, setPeers] = useState([]);
	const [peerVideo, setPeerVideo] = useState([]);
	const [isPresenting, setIsPresenting] = useState(false);
	const vid = useRef();
	const adminId = useRef();
	const [isAdmin, setIsAdmin] = useState(false);
	const [canvasStream, setCanvasStream] = useState();
	const [vidState, setvidState] = useState(true);
	const [chattingState, setChattingState] = useState(false);
	const [isAudio, setIsAudio] = useState(true);
	const [prevMessage, setPrevMessage] = useState();
	const [messageList, setMessageList] = useState([]);
	const currentPeer = useRef();
	const adminPeer = useRef();
	const [size, setSize] = useState();

	const [videoDisplay, setVideoDisplay] = useState(true);

	const [message, setMessage] = useState("");

	const [arr, setArr] = useState([]);

	let recordedBlobs;
	let mediaRecorder;

	if (window.location.hash === "#init") {
		window.addEventListener("beforeunload", function (e) {
			// e.preventDefault();
			deleteId(id);
			window.localStorage.removeItem("idRoom");
			e.returnValue = "Are you sure you want to exit?";
			console.log(e.returnValue);
		});
	}

	function download() {
		var blob = new Blob(recordedBlobs, {
			type: "video/webm",
		});
		var url = URL.createObjectURL(blob);
		var a = document.createElement("a");
		document.body.appendChild(a);
		// a.style = "display: none";
		a.href = url;
		a.download = "test.webm";
		a.click();
		window.URL.revokeObjectURL(url);
	}

	function handleDataAvailable(event) {
		console.log("handleDataAvailable", event);
		if (event.data && event.data.size > 0) {
			recordedBlobs.push(event.data);
			download();
		}
	}

	function stopRecording() {
		mediaRecorder.stop();
	}
	function startRecording(cStream) {
		recordedBlobs = [];
		const mimeType = "video/webm;codecs=vp9,opus";
		const options = { mimeType };

		try {
			mediaRecorder = new MediaRecorder(cStream, options);
		} catch (e) {
			console.log(e);
			return;
		}

		// console.log(
		// 	"Created MediaRecorder",
		// 	mediaRecorder,
		// 	"with options",
		// 	options
		// );
		// // recordButton.textContent = "Stop Recording";
		// // playButton.disabled = true;
		// // downloadButton.disabled = true;
		// // codecPreferences.disabled = true;
		// mediaRecorder.onstop = (event) => {
		// 	console.log("Recorder stopped: ", event);
		// 	console.log("Recorded Blobs: ", recordedBlobs);
		// };
		// // const blob = new Blob(recordedBlobs, { type: "video/webm" });

		mediaRecorder.ondataavailable = handleDataAvailable;

		mediaRecorder.start();
		setTimeout(() => {
			mediaRecorder.stop();
			// 	const blob = new Blob(recordedBlobs, {
			// 		type: "video/webm",
			// 	});
			// 	console.log(blob);
			// 	const url = window.URL.createObjectURL(blob);
			// 	const a = document.createElement("a");
			// 	a.style.display = "none";
			// 	a.href = url;
			// 	a.download = "test.webm";
			// 	document.body.appendChild(a);
			// 	a.click();
			// 	setTimeout(() => {
			// 		document.body.removeChild(a);
			// 		window.URL.revokeObjectURL(url);
			// 	}, 100);
		}, 10000);
		console.log("MediaRecorder started", mediaRecorder);
	}

	useEffect(() => {
		if (window.location.hash !== "#init") {
			setIsAdmin(false);
		} else {
			setIsAdmin(true);
		}
		socketRef.current = io.connect("/");
		navigator?.mediaDevices
			?.getUserMedia({ video: true, audio: true })
			.then((stream) => {
				setStreamObj(stream);

				//Screen Share
				var canvas = document.getElementById("localCanvas");

				console.log(stream);

				if (window.location.hash === "#init") {
					navigator.mediaDevices
						//Cursor True is means sending cursor also of the person sharing screen to the person recieving the screen
						.getDisplayMedia({ cursor: true })
						.then((screenStream) => {
							let localStream2 = screenStream;
							var localVideo = document.getElementById("adminVid");
							var localVideo2 = document.getElementById("ssVideo");
							localVideo2.hidden = false;
							canvas.hidden = false;
							localVideo.style.width = "0";
							localVideo.style.height = "0";
							localVideo2.style.width = "0";
							localVideo2.style.height = "0";

							console.log(screenStream.getVideoTracks()[0].getSettings().width);
							canvas.width = screenStream
								.getVideoTracks()[0]
								.getSettings().width;
							canvas.height = screenStream
								.getVideoTracks()[0]
								.getSettings().height;
							var ctx = canvas.getContext("2d");
							setInterval(() => {
								if (
									canvas.width !==
									localStream2.getVideoTracks()[0].getSettings().width
								) {
									canvas.width = localStream2
										.getVideoTracks()[0]
										.getSettings().width;
									canvas.height = localStream2
										.getVideoTracks()[0]
										.getSettings().height;
								}
								if (window.innerWidth > 500) {
									// console.log("BIG",window.innerWidth);

									let h = canvas.height - 150;
									let w = canvas.width - 200;
									ctx.drawImage(localVideo2, 0, 0);
									ctx.drawImage(localVideo, w, h, 200, 150);
								} else {
									// console.log("SMALL");
									let h = canvas.height - 50;
									let w = canvas.width - 100;
									ctx.drawImage(localVideo2, 0, 0);
									ctx.drawImage(localVideo, w, h, 100, 50);
								}
							}, 33);

							if (window.location.hash === "#init") {
								userVideo.current.srcObject = stream;
								adminId.current = socketRef.current.id;
								setIsAdmin(true);
								ssVideo.current.srcObject = screenStream;
								setStreamObj(stream);
							}

							stream = canvas.captureStream(30);
							console.log(stream);
							setCanvasStream(canvas.captureStream(30));
							startRecording(stream);
						});
				}

				console.log("JOINED ROOM");
				socketRef.current.emit("roomID", id);

				console.log("ROOMID", id);

				socketRef.current.on("all users", (users) => {
					//peers is for how many videos are rendering
					console.log(users.length);
					setArr(users);
					console.log(socketRef.current);
					//socketRef.current.id is the of user currently joined
					// UserID  id's of all those inside the meeting
					if (users[0] !== socketRef.current.id) {
						const peer = createPeer(users[0], socketRef.current.id, stream);
						console.log(stream);
						//peersRef is for which is having connection with which
						peersRef.current.push({
							peerID: users[0],
							peer,
						});
						setPeers((prev) => [...prev, peer]);
					}
				});
				//PERSON IN THE ROOM GETS NOTIFIED THAT SOMEBODY HAS JOINED
				//.on means recieving from backend
				socketRef.current.on("user joined", (payload) => {
					const peer = addPeer(payload.signal, payload.callerID, stream);

					peersRef.current.push({
						peerID: payload.callerID,
						peer,
					});

					setPeers((users) => [...users, peer]);
				});
				socketRef.current.on("receiving returned signal", (payload) => {
					// signal has been send to multiple now multiple users are sending back the signal to caller
					const item = peersRef.current.find((p) => p.peerID === payload.id);
					console.log(item);

					item.peer.signal(payload.signal);
				});
				// 		});
			});
	}, []);

	function createPeer(userToAdmin, callerID, stream) {
		console.log("CREATE PEER");
		console.log(stream);
		const peer = new Peer({
			initiator: true,
			//trickle wait for all the data to send makes it slow
			trickle: false,
			stream,
		});

		currentPeer.current = peer;
		//generates signal
		//sending to backend
		console.log(userToAdmin + "  " + callerID);
		peer.on("signal", (signal) => {
			socketRef.current.emit("sending signal", {
				userToAdmin,
				callerID,
				signal,
			});
		});

		peer.on("stream", (stream) => {
			console.log(stream);
			userVideo.current.srcObject = stream;

			setStreamObj(stream);
		});
		// setPeers((prev) => [...prev, peer]);

		return peer;
	}

	function addPeer(incomingSignal, callerID, stream) {
		console.log("Add Peer");
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream,
		});

		adminPeer.current = peer;
		// 1 accepting the incoming signal that this will return the signal
		peer.signal(incomingSignal);

		peer.on("signal", (signal) => {
			socketRef.current.emit("returning signal", { signal, callerID });
		});

		return peer;
	}

	const disconnect = () => {
		socketRef.current.disconnect();
	};

	const screenShare = () => {
		const idRoom = shortid.generate();
		// setIsPresenting(true)
		axios({
			method: "post",
			url: `api/${id}/${idRoom}`,
			idRoom,
		});
		socketRef.current.emit("ssIdUser", idRoom);
		console.log(idRoom);
		navigator.mediaDevices
			//Cursor True is means sending cursor also of the person sharing screen to the person recieving the screen
			.getDisplayMedia({ cursor: true })
			.then((screenStream) => {
				console.log("SCREEN STREAM", screenStream);
				console.log(userVideo.current);
				let video = document.getElementById("ssVideo");

				if ("srcObject" in video) {
					video.srcObject = screenStream;
				} else {
					video.src = window.URL.createObjectURL(screenStream); // for older browsers
				}

				video.play();

				// peers.map((peer, index) => {
				// 	console.log(peer, "PEEr");

				// 	peer.replaceTrack(
				// 		//0th track is the screen track
				// 		streamObj.getVideoTracks()[0],
				// 		screenStream.getVideoTracks()[0],
				// 		streamObj
				// 	);
				// });
				setIsPresenting(true);

				//WHEN SHARING STOPS RETURN TO NORMAl STATE
				//RESPONSIBLE FOR WORKING OF STOP BUTTON
				// setScreenCastStream(screenStream);
				//
				screenStream.getTracks()[0].onended = () => {
					peers.map((peer, index) => {
						console.log("CALLED");
						peer.replaceTrack(
							screenStream.getVideoTracks()[0],
							streamObj.getVideoTracks()[0],
							streamObj
						);
					});
					setIsPresenting(false);
				};
			});
	};

	const stopSharing = () => {
		console.log("STOPSHARING");
		peers.map((peer, index) => {
			peer.replaceTrack(
				screenStream.getVideoTracks()[0],
				streamObj.getVideoTracks()[0],
				streamObj
			);
			setIsPresenting(false);
		});
	};

	const toggleVideo = (value) => {
		if (value) {
			userVideo.current.srcObject = streamObj;
			// userVideo.current.play();
			// navigator.mediaDevices
			// 	.getUserMedia({ video: true, audio: true })
			// 	.then((stream) => {
			// 		userVideo.current.srcObject = stream;
			// 	});
		} else {
			// navigator.mediaDevices
			// 	.getUserMedia({ video: true, audio: true })
			// 	.then((stream) => {
			// 		userVideo.current.srcObject = stream.stop;
			// 	});
			userVideo.current.srcObject = streamObj.stop;
		}

		setvidState(value);
	};

	const sendMessage = (msg) => {
		if (currentPeer.current) {
			currentPeer.current.send(msg);
		}
		if (adminPeer.current) {
			adminPeer.current.send(msg);
		}
		socketRef.current.emit("prevMessage", prevMessage);
		socketRef.current.emit("newMessage", {
			msg: msg,
			time: moment().format("LT"),
			name: socketRef.current.id,
		});
	};

	const handleClick = () => {
		sendMessage(message);
		setMessage("");
	};

	// document.addEventListener("keypress", function (event) {
	// 	//   alert("key is pressed")
	// 	if (event.charCode === 13) {
	// 		sendMessage(message);
	// 		setMessage("");
	// 	}
	// });

	// console.log(prevMessage);

	// if (window.innerWidth > 767) {
	// 	setVideoDisplay(true);
	// }
	useEffect(() => {
		socketRef.current.on("allMessages", (payload) => {
			setPrevMessage(payload.chatMessages);
			setMessageList(payload.chatMessages);
		});

		socketRef.current.on("currentUserMessages", (payload) => {
			setMessageList(payload.chatMessages);
			setPrevMessage(payload.chatMessages);
		});
	}, []);
	// window.resize(function () {
	// 	// console.log("window was resized");
	//     setVideoDisplay(true)
	// });
	console.log(isAdmin);
	return (
		<div class={`${isAdmin ? "videoScreen" : "user-videoScreen"}`}>
			<div className={`${isAdmin ? "vid-chat" : "user-vid-chat"}`}>
				{isAdmin ? (
					<div
						className={`container-video  ${
							videoDisplay ? null : "hide-screen"
						} `}
					>
						<video
							className="adminVid"
							id="adminVid"
							ref={userVideo}
							muted={isAudio}
							autoPlay
							controls
						/>
						<video
							id="ssVideo"
							ref={ssVideo}
							muted
							autoPlay
							playsInline
							controls
							hidden
						/>
						<canvas hidden id="localCanvas"></canvas>
					</div>
				) : (
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
							<div className={`container-video-user  `}>
								<video
									className="adminVid"
									id="adminVid"
									ref={userVideo}
									muted={isAudio}
									autoPlay
									controls
								/>
								<video
									id="ssVideo"
									ref={ssVideo}
									muted
									autoPlay
									playsInline
									controls
									hidden
								/>
								<canvas hidden id="localCanvas"></canvas>
							</div>{" "}
						</div>
						<div className="about-video-lec">
							<h3>
								Basic Fundamental of Organic Chemistry <span>(English)</span>
							</h3>
							<p>
								In this class you learn the basic fundamental of organic
								chemistry. Organic chemistry is related with environment and how
								to control the need of user.
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
				)}

				{isAdmin ? (
					chattingState && (
						<div className="chat-text-send">
							{messageList.map((msg) => {
								return (
									<div className="messg-container-2">
										{" "}
										<p class="sender-name">{msg.name}</p>
										<div className="messg-details">
											<span>{msg.msg}</span>
											<span class="sender-time">{msg.time}</span>
										</div>
									</div>
								);
							})}

							<div className="chat-bottom-container">
								<input
									onChange={(e) => {
										setMessage(e.target.value);
										console.log(e.target.value);
									}}
									value={message}
									type="text"
									placeholder="Type a message..."
								/>
								<SendOutlinedIcon onClick={handleClick} />
							</div>
						</div>
					)
				) : (
					<div className="right-video-lecture">
						<div className="chat-container">
							<div className="top-container">
								<span className="top-c-live">Live chat</span>
								<span className="hide">
									{/* {hideChat ? "Show Chat" : "Hide Chat"} */}
								</span>
							</div>

							<div>
								<div className="chatting-container">
									{messageList.map((msg) => {
										return (
											<div className="messg-container-2">
												{" "}
												<p class="sender-name">{msg.name}</p>
												<div className="messg-details">
													<span>{msg.msg}</span>
													<span class="sender-time">{msg.time}</span>
												</div>
											</div>
										);
									})}
								</div>
								<div className="input-messg-container">
									<div className="input-msg-c-left">
										<img src="/images/sunset.jpg" alt="img" />
									</div>
									<div className="input-msg-c-right">
										<label>Name</label>
										<input
											onChange={(e) => {
												setMessage(e.target.value);
												console.log(e.target.value);
											}}
											value={message}
											type="text"
											placeholder="Type a message..."
										/>
										<div className="icons">
											<InsertEmoticonIcon />
											<AttachFileIcon className="attach" />
											<SendIcon className="send" onClick={handleClick} />
										</div>
									</div>
								</div>
							</div>
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
				)}
			</div>
			{isAdmin && (
				<div className="footer-body">
					<Footer
						stopRecording={stopRecording}
						mediaRecorder={mediaRecorder}
						recordedBlobs={recordedBlobs}
						vidState={vidState}
						toggleVideo={toggleVideo}
						id={id}
						setVideoDisplay={setVideoDisplay}
						videoDisplay={videoDisplay}
						isAudio={isAudio}
						setIsAudio={setIsAudio}
						stopSharing={stopSharing}
						isPresenting={isPresenting}
						screenShare={screenShare}
						isAdmin={isAdmin}
						setJoinDisable={setJoinDisable}
						setDisable={setDisable}
						disconnect={disconnect}
						chattingState={chattingState}
						setChattingState={setChattingState}
					/>
				</div>
			)}
		</div>
	);
};

export default LiveCast;
