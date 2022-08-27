import React, { useEffect, useState } from "react";
import { educatorProfile } from "../../../services/api";
import Class from "../../common/Class/Class";
import "./TeacherProfile.css";

function TeacherProfile() {
  const [todayClass, setTodayClass] = useState(true);
  const [upcomingClass, setUpcomingClass] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const [teacherData, setTeacherData] = useState({
    name: "Khan Sir",
    specialist: "#1 educator in IIT Physics",
    image:
      "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    languages: ["English", "Hindi"],
    followers: "15k",
    batches: "20+ Batches",
    dailyclasses: "5+ Daily Live Classes",
    classes: [
      {
        day: "Today",
        class: [
          {
            subject: "Physics",
            time: "9 am",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "3 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
        ],
      },
      {
        day: "Tomorrow",
        class: [
          {
            subject: "Physics",
            time: "9 am",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "3 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
        ],
      },
    ],
    bestclasses: [
      {
        day: "Today",
        class: [
          {
            subject: "Physics",
            time: "9 am",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "3 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
        ],
      },
    ],
  });
  const [bestSeeAll, setBestSeeAll] = useState(false);
  const [day, setDay] = useState("Today");

  //backend
  // useEffect( async() => {
  //   try{
  //     const data = await educatorProfile();
  //     setTeacherData(data.data[0]);
  //   }catch(err) {
  //     console.log(err);
  //   }
  // }, []);
  return (
    <>
      {teacherData ? (
        <div className="home">
          <div className="f-sec">
            <div className="f-left">
              <h1>{teacherData.name}</h1>
              <h3>{teacherData.specialist}</h3>
              <p>{teacherData.about}</p>
              {teacherData.languages.map((language, index) => {
                return !index % 2 ? (
                  <span key={index}> {language}, </span>
                ) : (
                  <span key={index}> {language} </span>
                );
              })}

              <div>
                <h4>{teacherData.followers} Followers</h4>
                <h4>{teacherData.batches}</h4>
                <h4>{teacherData.dailyclasses}</h4>
              </div>
            </div>
            <div className="f-right">
              <img src={teacherData.image} alt />
              <br />
              <button className="btn btn-primary follow">Follow</button>
            </div>
          </div>

          <div className="class-sec">
            <div className="days">
              <button
                onClick={() => {
                  setTodayClass(true);
                  setUpcomingClass(false);
                  setSeeAll(false);
                  setDay("Today");
                }}
                className={`btn btn-success ${todayClass ? "active" : ""}`}
              >
                Today Classes
              </button>
              <button
                onClick={() => {
                  setTodayClass(false);
                  setUpcomingClass(true);
                  setSeeAll(false);
                  setDay("Tomorrow");
                }}
                className={`btn btn-success ${upcomingClass ? "active" : ""}`}
              >
                Upcoming Classes
              </button>
              <button
                onClick={() => {
                  setTodayClass(false);
                  setUpcomingClass(false);
                  setSeeAll(false);
                  setDay("Today");
                }}
                className={`btn btn-success ${
                  !todayClass && !upcomingClass ? "active" : ""
                }`}
              >
                All Classes
              </button>
            </div>
            <div
              onClick={() => {
                setSeeAll(true);
              }}
              className="expa"
              style={{ display: `${seeAll ? "none" : "flex"}` }}
            >
              <h3>See all</h3>
            </div>

            <div className="class-courses">
              {teacherData.classes.map((eachClass) => {
                if (eachClass.day === `${day}`)
                  if (!seeAll)
                    return eachClass.class.map((cls, index) => {
                      if (index < 3)
                        return (
                          <Class
                            key={index}
                            name={teacherData.name}
                            subject={cls.subject}
                            time={eachClass.day + " " + cls.time}
                            topic={cls.topic}
                            img={teacherData.image}
                          />
                        );
                    });
                  else
                    return eachClass.class.map((cls, index) => {
                      return (
                        <Class
                          key={index}
                          name={teacherData.name}
                          subject={cls.subject}
                          time={eachClass.day + " " + cls.time}
                          topic={cls.topic}
                          img={teacherData.image}
                        />
                      );
                    });
              })}
            </div>
            <div className="best-cl">
              <h3>Best of All Time Classes</h3>
              <p
                onClick={() => setBestSeeAll(true)}
                style={{ display: `${bestSeeAll ? "none" : "flex"}` }}
              >
                See all
              </p>
            </div>

            <div className="class-courses">
              {teacherData.bestclasses.map((eachClass) => {
                if (!bestSeeAll)
                  return eachClass.class.map((cls, index) => {
                    if (index < 3)
                      return (
                        <Class
                          key={index}
                          name={teacherData.name}
                          subject={cls.subject}
                          time={eachClass.day + " " + cls.time}
                          topic={cls.topic}
                          img={teacherData.image}
                        />
                      );
                  });
                else
                  return eachClass.class.map((cls, index) => {
                    return (
                      <Class
                        key={index}
                        name={teacherData.name}
                        subject={cls.subject}
                        time={eachClass.day + " " + cls.time}
                        topic={cls.topic}
                        img={teacherData.image}
                      />
                    );
                  });
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default TeacherProfile;
