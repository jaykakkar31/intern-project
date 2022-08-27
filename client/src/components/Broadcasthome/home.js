import "./home.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import {insertVideoId} from '../../services/api';
const shortid = require("shortid");

const Home = ({  disable, joinDisable }) => {
	// const [idRoom, setIdRoom] = useState();
	var idRoom ;

	useEffect(() => {
		if (window.localStorage.getItem("idRoom")) {
			idRoom=(window.localStorage.getItem("idRoom"));
		} else {
			// setId(id)
            idRoom =shortid.generate()
			console.log(idRoom);

			window.localStorage.setItem("idRoom", idRoom);
		}
	});

	const history = useHistory();

	// window.location.reload()

	return (
		<div className="header-broadcast">
			<Button
				variant="primary"
				size="lg"
				disabled={disable}
				onClick={() => {
                    insertVideoId(idRoom)
					history.push(`/educator/liveclass/broadcast/${idRoom}#init`);
				}}
			>
				Create Broadcast
			</Button>
			<Button
				variant="primary"
				size="lg"
				disabled={joinDisable}
				onClick={() => {
					history.push(`/educator/liveclass/broadcast/${idRoom}`);
				}}
			>
				Join Now
			</Button>
		</div>
	);
};

export default Home;
