import "./verify.css";
import verified from "./verified.jpg";
import { Button } from "react-bootstrap";

function Verify() {
	return (
		<div className="verify">
			<img src={verified}></img>
			<Button
				onClick={() => {
					window.location = "/educator";
				}}
				variant="primary"
			>
				Continue
			</Button>{" "}
		</div>
	);
}

export default Verify;
