import "./footer.css";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import { useHistory } from "react-router-dom";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { deleteId } from "../../../services/api";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import { useState } from "react";
import VideocamOffOutlined from "@material-ui/icons/VideocamOffOutlined";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import { StopScreenShare } from "@material-ui/icons";
const Footer = ({
	id,
	isAdmin,
	screenShare,
	isPresenting,
	disconnect,
	chattingState,
	setChattingState,
	stopSharing,
	vidState,
	toggleVideo,
	isAudio,
	setIsAudio,
	videoDisplay,
	setVideoDisplay,
	recordedBlobs,
	mediaRecorder,
	stopRecording,
}) => {
	// const [micState, setmicState] = useState(false);
	// const [vidState, setvidState] = useState(false);
	// const [screenShareState, setScreeenShareState] = useState(false);

	const history = useHistory();
	// console.log(isAdmin);
	const handleEnd = () => {
		// const downloadButton = document.querySelector("button#download");
		// 		downloadButton.addEventListener("click", () => {
		// mediaRecorder?.stop();
		const blob = new Blob(recordedBlobs, { type: "video/webm" });
		console.log(blob);
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.style.display = "none";
		a.href = url;
		a.download = "test.webm";
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 100);
		// });
	};
	return (
		<div className="footer-block">
			<div className="container-for-icons">
				<div
					className="micOn"
					onClick={() => {
						setIsAudio(!isAudio);
					}}
				>
					{isAudio ? <MicOffOutlinedIcon /> : <MicNoneOutlinedIcon />}
				</div>
				<div
					className="vidOn"
					onClick={() => {
						toggleVideo(!vidState);
					}}
				>
					{vidState ? <VideocamOutlinedIcon /> : <VideocamOffOutlined />}
				</div>

				<div
					className="icon-block phone"
					onClick={() => {
						handleEnd();
						if (window.location.hash === "#init") {
							deleteId(id);
						}
						disconnect();
						history.push("/");
					}}
				>
					<PhoneEnabledIcon />
				</div>
				{isPresenting ? (
					<div
						className="screenShareOn"
						onClick={() => {
							console.log("STOP");
							stopSharing();
						}}
					>
						<CancelPresentationOutlinedIcon />
					</div>
				) : (
					<div
						className="screenShareOn"
						onClick={() => {
							screenShare();
						}}
					>
						<ScreenShareOutlinedIcon />
					</div>
				)}

				<div
					className="settingsOn"
					onClick={() => {
						stopRecording()
					}}
				>
					<MoreVertIcon />
				</div>

				{/* {isAdmin && (
				<div
					className="icon-block screen-share"
					onClick={() => {
						screenShare();
					}}
				>
					<DesktopWindowsIcon />
					{isPresenting ? (
						<p className="title">Stop now</p>
					) : (
						<p className="title">Present now</p>
					)}
				</div>
			)} */}
			</div>
			<div className="footer-chat">
				<button
					onClick={() => {
						setChattingState(!chattingState);
					}}
				>
					Chat
				</button>

				<ChatBubbleOutlineIcon
					onClick={() => {
						setVideoDisplay(!videoDisplay);
						setChattingState(!chattingState);
					}}
				/>
			</div>
		</div>
	);
};

export default Footer;
