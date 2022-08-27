import "./Calender.css";
import { useRef, useState, useEffect } from "react";
import Popup from "./popupevent/popup";
import SCalendar from "react-calendar";
import { getEvent } from "../../services/api";
import moment from "moment";
import Month from "./Month/month";
import DetailsPopUp from "./DetailsPopUp/DetailsPopUp";
import "react-calendar/dist/Calendar.css";
import StudentSideBar from "../common/Sidebar/StudentSideBar";
import CrashHeader from "../common/CrashHeader/CrashHeader";

const Calender = () => {
  const [eventData, setEventData] = useState();
  //const [stateChange, setState] = useState([]);
  const [data, setData] = useState('Day');

  useEffect(() => {
    getEvent().then((response) => {
      setEventData(response.data);
    });
  }, []);

  let i = useRef(moment().month());
  const [timeId, setTimeId] = useState(0);
  const [weekDayId, setWeekDayId] = useState(0);
  const [timeDefault, setTimeDefault] = useState();
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  //const [a, setA] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [aLabel, setAlabel] = useState();
  const currentText = useRef();
  const [cMonth, setMonth] = useState(moment().format("MMMM"));
  const [detailPop, setDetailPop] = useState(false);
  const [task, setTask] = useState(null);
  const [divChildClicked, setDivChildClicked] = useState(true);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let event = {
    startAt: selectedStartDate,
    endAt: selectedEndDate,
    title: "",
    email: "",
    description: "",
  };
  const minusOne = () => {
    if (i.current === -1) {
      i.current = 11;
    }
    if (i.current >= 0) {
      i.current -= 1;
      setMonth(month[i.current]);
    }
    if (i.current === -1) {
      setMonth(month[11]);
    }
    console.log(i.current);
  };

  const time = [
    "00:00 am",
    "01:00 am",
    "02:00 am",
    "03:00 am",
    "04:00 am",
    "05:00 am",
    "06:00 am",
    "07:00 am",
    "08:00 am",
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
    "10:00 pm",
    "11:00 pm",
  ];
  const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
  const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const newMonth = [
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


  const plusOne = () => {
    if (i.current > 11) {
      i.current = 0;
    } else {
      i.current += 1;
      setMonth(month[i.current]);
    }
    if (i.current === 12) {
      setMonth(month[0]);
    }
    console.log(i.current);
  };
  const [value, onChange] = useState(new Date());

  //  moment("01:00", "HH:mm").format("LT");

  return (
	<div className="crash-home">
	<StudentSideBar />
	<div className="c-h-right">
	  <CrashHeader />
    <div className="main-container">
      {!isHidden && (
        <Popup
          task={task}
          setTask={setTask}
          setIsHidden={setIsHidden}
          isHidden={isHidden}
          timeId={timeId}
          weekDayId={weekDayId}
          setEventData={setEventData}
          timeDefault={timeDefault}
          aLabel={aLabel}
        />
      )}
      {console.log(data)}
      {detailPop && (
        <DetailsPopUp
          setIsHidden={setIsHidden}
          isHidden={isHidden}
          onChangeDetailPop={setDetailPop}
          setEventData={setEventData}
          setTask={setTask}
          task={task}
          divChildClicked={divChildClicked}
          onDivClicked={setDivChildClicked}
          time={time}
        />
      )}

      <h3>Calender</h3>

      <div className="container-header">
        <div class="slideshow-container">
          <button onClick={minusOne}>❮</button>
          <div class="mySlides">
            <span>{cMonth}</span>
          </div>

          <button onClick={plusOne}>❯</button>
        </div>
        <div className="date">
          <span>{moment().format("LL")}</span>
        </div>
        <div className="dropdown">
          <select id="sel" onChange={(e) => setData(e.target.value)}>
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
          </select>
         
        </div>
      </div>
     { data==='Day'&&(<div className="box">
        {newMonth.map((i, index) => {
          return (
            <div className="time-container">
              <div
                onClick={(e) => {
                  console.log(e);
                  setAlabel(moment().format("LL"));
                  setTimeDefault(i);
                  setTimeId(index);
                  setIsHidden(!isHidden);
                }}
                id={index}
                className="time-data"
                type="text"
              >
                <div className="day-time-x">
                  {moment(i, "HH:mm").format("LT")}
                </div>

                {eventData &&
                  eventData.map((event) => {
                    let startAt = newMonth.indexOf(event.startAt);
                    let endAt = newMonth.indexOf(event.endAt);
                    return (
                      event.timeId === index && (
                        <div className="title-des">
                          <div
                            className="event-day day-column"
                            style={{
                              height: `${
                                8 +
                                (6 *
                                  parseInt(
                                    event.endAt.slice(0, 2) -
                                      event.startAt.slice(0, 2)
                                  ) -
                                  6)
                              }rem`,
                            }}
                            onClick={(e) => {
                              console.log(
                                `${
                                  8 +
                                  (6 *
                                    parseInt(
                                      event.endAt.slice(0, 2) -
                                        event.startAt.slice(0, 2)
                                    ) -
                                    6)
                                }rem`
                              );
                              setDetailPop(true);
                              setTask(event);
                              e.stopPropagation();
                            }}
                          >
                            <p>{event.title}</p>
                            <p>{`${moment(event.startAt, "HH:mm").format(
                              "LT"
                            )} - ${moment(event.endAt, "HH:mm").format(
                              "LT"
                            )}`}</p>
                            <p>{event.description}</p>
                          </div>
                          {/* <div className="event-day event-description">
														{event.description}
													</div> */}
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>)}

      {data==='Week' && (<div>
        <div className="days-head week-days-head">
          {week.map((day) => {
            return <h3>{day}</h3>;
          })}
        </div>
        <div className="box">
          {newMonth.map((j, tIndex) => {
            return (
              <div className="time-container week-day-container">
                <div className="day-time">
                  {moment(j, "HH:mm").format("LT")}
                </div>
                {weekdays.map((i, dIndex) => {
                  return (
                    <div
                      className="time "
                      type="text"
                      day={i}
                      time={j}
                      onClick={(e) => {
                        console.log(e.target);
                        setTimeId(tIndex);
                        setAlabel(moment().format("LL"));
                        setWeekDayId(dIndex);
                        setIsHidden(!isHidden);
                      }}
                    >
                      {eventData &&
                        eventData.map((event) => {
                          let startAt = moment(event.startAt, "HH:mm");
                          let endAt = moment(event.endAt, "HH:mm");
                          let check = moment(j, "HH:mm");
                          let nextCheck = moment(newMonth[tIndex + 1], "HH:mm");

                          console.log();
                          return (
                            startAt.isSameOrBefore(check) &&
                            event.timeId === tIndex &&
                            event.dayId === dIndex && (
                              <div className="title-des week-title-des">
                                <div
                                  className="event-day event-week week-colum"
                                  style={{
                                    height: `${
                                      8 +
                                      (6 *
                                        parseInt(
                                          event.endAt.slice(0, 2) -
                                            event.startAt.slice(0, 2)
                                        ) -
                                        6)
                                    }rem`,
                                  }}
                                  onClick={(e) => {
                                    setDetailPop(true);
                                    setTask(event);
                                    e.stopPropagation();
                                  }}
                                >
                                  <p>{event.title}</p>
                                  <p>{`${moment(event.startAt, "HH:mm").format(
                                    "LT"
                                  )} - ${moment(event.endAt, "HH:mm").format(
                                    "LT"
                                  )}`}</p>
                                  <p>{event.description}</p>
                                </div>
                                {/* <div className="event-day event-week event-description">
																	{event.description}
																</div> */}
                              </div>
                            )
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>)}

      {data==='Month'&&(<div>
        <div className="days-head">
          {week.map((day) => {
            return <h3>{day}</h3>;
          })}
        </div>

        <div className="box">
          <div className="time-container week-day-container  calend-container month-day">
            <Month
              monthIndex={i.current}
              setIsHidden={setIsHidden}
              isHidden={isHidden}
              onDateChange={setAlabel}
              eventData={eventData}
              onChangeDetailPop={setDetailPop}
              detailPop={detailPop}
              newMonth={newMonth}
              newTime={time}
              setTask={setTask}
              setWeekDayId={setWeekDayId}
            />
          </div>
        </div>
      </div>)}

      {data==='Year'&&(<div>
        <div className="box">
          <div className="year-month">
            {month.map((i, index) => {
              let value = new Date();
              value.setMonth(index);

              return (
                <div className="calend-container">
                  <span className="month-head">{i}</span>
                  <SCalendar
                    // tileDisabled
                    calendarType="US"
                    className="calend"
                    value={value}
                    onChange={onChange}
                  ></SCalendar>
                </div>
              );
            })}
          </div>
        </div>
      </div>)}
    </div>
	</div>
	</div>
  );
};

export default Calender;

//
//
