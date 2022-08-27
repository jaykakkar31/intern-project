import "./month.css";
import Calendar from "react-calendar";
import moment from "moment";
import { useMemo } from "react";

function Month({
	monthIndex,
	setIsHidden,
	onDateChange,
	eventData,
	onChangeDetailPop,
	detailPop,

    setWeekDayId,
	setTask,
}) {
	const dates = useMemo(() => {
		let i = moment().month(monthIndex).startOf("month").startOf("week");
		let endMoment = moment().month(monthIndex).endOf("month").endOf("week");

		const arr = [];
		while (i.isSameOrBefore(endMoment, "date")) {
			arr.push(i.clone());
			i.add(1, "day");
		}
		return arr;
	}, [monthIndex]);

	console.log(dates);
	return (
		<div className="out-box">
			{dates.map((date, index) => {
				const isCurrentMonth = date.month() === moment().month();
				return (
					<div
						className={`month-box ${
							isCurrentMonth ? "current-month" : ""
						} style-month-box`}
						onClick={
							isCurrentMonth
								? (e) => {
                                        setWeekDayId(date.weekday());
										onDateChange(date.format("LL"));
										detailPop ? setIsHidden(true) : setIsHidden(false);
								  }
								: undefined
						}
					>
						<div>
							{date.date()}
							{eventData?.map((event) => {
							
								return (
									event.aLabel === date.format("LL") && (
										<div
											className="event evnt-day"
											onClick={(e) => {
												onChangeDetailPop(true);
												setTask(event);
												e.stopPropagation();
											}}
										>
											<p>{`${moment(event.startAt, "HH:mm").format("LT")} ${
												event.title
											}`}</p>
										</div>
									)
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Month;
