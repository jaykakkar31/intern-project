import "./videoPlayer.css";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import ReactPlayer from "react-player";

// import { YoutubePlayer } from "reactjs-media";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import VolumeOffOutlinedIcon from "@material-ui/icons/VolumeOffOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import Slider from "@material-ui/core/Slider";
import VolumeDownOutlinedIcon from "@material-ui/icons/VolumeDownOutlined";
import FullscreenRoundedIcon from "@material-ui/icons/FullscreenRounded";
import Container from "@material-ui/core/Container";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import { ReactVideoPlay, VideoSourceType } from "react-video-play";
// import Plyr from "plyr";

import screenfull from "screenfull";

function Video({id}) {
	const [play, setPlay] = useState(false);
	const [fullScreen, setFullScreen] = useState(false);
	const [videoElement, setVideoElement] = useState();
	const playerContainerRef = useRef(null);
	const playerRef = useRef(null);
	const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
	const [currentTime, setCurrentTime] = useState();
	const [elapsedTime, setElapsedTime] = useState();
	const [clicked, setClicked] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [panchorEl, psetAnchorEl] = useState(null);

	const [state, setState] = useState({
		pip: false,
		playing: false,
		controls: false,
		light: false,

		muted: false,
		played: 0,
		duration: 0,
		playbackRate: 1.0,
		volume: 1,
		loop: false,
		seeking: false,
		vidQualtity: "720p",
	});

	const {
		playing,
		controls,
		light,

		muted,
		loop,
		playbackRate,
		pip,
		played,
		seeking,
		volume,
		vidQualtity,
	} = state;

	const handleSeekMouseDown = (e) => {
		setState({ ...state, seeking: true });
	};

	const handleVolumeChange = (e, newValue) => {
		console.log(parseFloat(newValue / 100));
		setState({
			...state,
			volume: parseFloat(newValue / 100),
			muted: newValue === 0 ? true : false,
		});
	};

	const toggleFullScreen = () => {
		setFullScreen(!fullScreen);
		screenfull.toggle(playerContainerRef.current);
	};

	const format = (seconds) => {
		if (isNaN(seconds)) {
			return `00:00`;
		}
		const date = new Date(seconds * 1000);
		const hh = date.getUTCHours();
		const mm = date.getUTCMinutes();
		const ss = date.getUTCSeconds().toString().padStart(2, "0");
		if (hh) {
			return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
		}
		return `${mm}:${ss}`;
	};

	const duration =
		playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(
				playerRef && playerRef.current
					? playerRef.current.getCurrentTime()
					: "00:00"
			);
			setElapsedTime(format(currentTime));
		}, 1000 / state.playbackRate);

		return () => {
			clearInterval(interval);
		};
		// },1)
	}, [currentTime, elapsedTime]);

	const totalDuration = format(duration);
	// console.log(elapsedTime);

	const handlePlaybackRate = (rate) => {
		playerRef.current.playbackRate = rate;
		document.getElementById("player")?.setPlaybackQuality("small");
		setState((prevState) => {
			return { ...prevState, playbackRate: rate };
		});
	};

	const handleVidQuality = (qlty) => {
		setState((prevState) => {
			return { ...prevState, vidQualtity: qlty };
		});
	};

	console.log(state);
	const handleClose = () => {
		setAnchorEl(null);
	};

    const phandleClose = () => {
			psetAnchorEl(null);
		};
	const handleClick = (event) => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

    	const phandleClick = (event) => {
				console.log(event.currentTarget);
				psetAnchorEl(event.currentTarget);
			};
	const open = Boolean(anchorEl);
    	const popen = Boolean(panchorEl);

	// playerRef.current?.setPlaybackQuality("small")
	// document.getElementById("iframe")[0].vq("small")
	// console.log(
	// 	document.getElementsByTagName("iframe")[0]
	// );

	// var player;

	// 		loadScript();

	// document.addEventListener("DOMContentLoaded", () => {
console.log(id,"ID");
    // const url=id?`https://localhost:3000/educator/liveclass/broadcast/${id}`:"https://www.youtube.com/watch?v=1ODhWjCxydU"

	return (
		<Container maxWidth="md">
			<div id="video-placeholder"></div>

			<div
				className={`video-container ${fullScreen ? "full-screen" : ""}`}
				ref={playerContainerRef}
			>
				<ReactPlayer
					className="video-player"
					url="https://www.youtube.com/watch?v=1ODhWjCxydU"
					// url="
					// height="100%" //commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
					// width="100%"
					vidmeConfig
					playing={playing}
					ref={playerRef}
					muted={muted}
					playbackRate={state.playbackRate}
					config={{
						youtube: {
							playerVars: { playsinline: 1 },
						},
					}}
					// controls={fullScreen}
					onClick={() => {
						setState((prevState) => {
							return {
								...prevState,
								playing: !prevState.playing,
							};
						});
					}}
				/>

				<div className="controls-container">
					{playing ? (
						<div className="play">
							<PauseRoundedIcon
								onClick={() => {
									setState(() => {
										return {
											...state,
											playing: !playing,
										};
									});
								}}
							/>
						</div>
					) : (
						<div className="play">
							<PlayArrowRoundedIcon
								onClick={() => {
									setState((prevState) => {
										return {
											...prevState,
											playing: !playing,
										};
									});
								}}
							/>
						</div>
					)}
					{muted && volume === 0 ? (
						<div className="mute">
							<VolumeOffOutlinedIcon
								onClick={() => {
									setState((prevState) => {
										return {
											...prevState,
											muted: !muted,
											volume: 1,
										};
									});
								}}
							/>
						</div>
					) : volume > 0 && volume < 1 ? (
						<div className="mute">
							<VolumeDownOutlinedIcon
								onClick={() => {
									setState((prevState) => {
										return {
											...prevState,
											muted: !muted,
										};
									});
								}}
							/>
						</div>
					) : (
						<div className="mute">
							<VolumeUpOutlinedIcon
								onClick={() => {
									setState((prevState) => {
										return {
											...prevState,
											muted: !muted,
											volume: 0,
										};
									});
								}}
							/>
						</div>
					)}
					<Slider
						min={0}
						max={100}
						value={muted ? 0 : volume * 100}
						onChange={handleVolumeChange}
						aria-labelledby="input-slider"
						// className={classes.volumeSlider}
						onMouseDown={handleSeekMouseDown}
						// onChangeCommitted={onVolumeSeekDown}
					/>
					<div className="time-container1">
						{" "}
						{elapsedTime}/{totalDuration}{" "}
					</div>
					{/* <div> */}
					<FullscreenRoundedIcon
						className="full-screen"
						onClick={() => {
							toggleFullScreen();
						}}
						fontSize="large"
					/>
					<div class="dropup">
						<button
							class="dropbtn"
							onClick={() => {
								setClicked(!clicked);
							}}
						>
							<SettingsRoundedIcon />
						</button>
						<div class={clicked && "dropup-content"}>
							<div className="speed">
								<span className="title" hidden={!clicked}>
									Playback Speed
								</span>
								<div hidden={!clicked}>
									<Grid className="play-back">
										<Button onClick={phandleClick}>{playbackRate}x</Button>{" "}
										<Popover
											open={popen}
											// anchorReference="anchorPosition"
											// anchorPosition={{ bottom: 200, right: 400 }}
											onClose={phandleClose}
											anchorEl={panchorEl}
											anchorOrigin={{
												vertical: "top",
												horizontal: "left",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											disableRestoreFocus
										>
											<div className="pop-container">
												{[0.5, 1, 1.5, 2].map((rate) => (
													<Button
														key={rate}
														onClick={() => handlePlaybackRate(rate)}
														// variant="text"
													>
														{rate}x
													</Button>
												))}
											</div>
										</Popover>
									</Grid>{" "}
								</div>
							</div>
							<div className="quality">
								<span className="title" hidden={!clicked}>
									Quality
								</span>
								<span hidden={!clicked}>
									<Grid className="quality">
										<Button onClick={handleClick}>{vidQualtity}</Button>

										<Popover
											open={open}
											onClose={handleClose}
											anchorEl={anchorEl}
											anchorOrigin={{
												vertical: "top",
												horizontal: "left",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
										>
											<Grid container direction="column">
												{["720p", "360p", "240p", "140p"].map((qlty) => (
													<Button
														key={qlty}
														onClick={() => handleVidQuality(qlty)}
														variant="text"
													>
														{qlty}
													</Button>
												))}
											</Grid>
										</Popover>
									</Grid>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Video;
