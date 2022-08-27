import "./DetailsPopUp.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import moment from 'moment'
import { deleteEvent, getEvent } from "../../../services/api";
function DetailsPopUp({
	isHidden,
	setIsHidden,
	task,
	setTask,
	onChangeDetailPop,
	divChildClicked,
	time,
	setEventData,
}) {
	console.log(task);
	const newTime = [
		"00:00",
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
	];
	let startAt = newTime.indexOf(task?.startAt);
	let endAt = newTime.indexOf(task?.endAt);
	return (
		<div className="detailPopup">
			<div className="icons-1">
				<EditIcon
					onClick={() => {
						setIsHidden(false);
						onChangeDetailPop(false);
					}}
				/>
				<DeleteIcon
					onClick={() => {
						deleteEvent(task).then((response) => {
							console.log(response);
							if (response.data === "deleted") {
								getEvent().then((response) => {
									setEventData(response.data);
								});
							}
							onChangeDetailPop(false);
							setTask(null);
						});
					}}
				/>
				<CloseIcon
					onClick={() => {
						onChangeDetailPop(false);
						setTask(null);
						// onDivClicked(false);
					}}
				/>
			</div>
			<div>
				<div className="title">{task?.title}</div>
				<div className="date">{task?.aLabel}</div>
				<div className="time-interval">
					{`${moment(task.startAt, "HH:mm").format("LT")} - ${moment(
						task.endAt,
						"HH:mm"
					).format("LT")}`}
				</div>
				<div className="description">{task?.description}</div>
			</div>
		</div>
	);
}
export default DetailsPopUp;
