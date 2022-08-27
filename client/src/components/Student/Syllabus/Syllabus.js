import React, { useEffect, useState } from "react";
import { iitSyllabus } from "../../../services/api";
import CourseSyllabus from "../../common/CourseSubject/CourseSyllabus";
import CrashHeader from "../../common/CrashHeader/CrashHeader";
import StudentSideBar from "../../common/Sidebar/StudentSideBar";

function Syllabus() {
  const [see1, setSee1] = useState(false);
  const [see2, setSee2] = useState(false);
  const [see3, setSee3] = useState(false);
  const [allCourses, setAllCourses] = useState({
    subjectsyllabus : [
        {
            subject : 'Maths',
            class : [
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                }
            ]
        },
        {
            subject : 'Physics',
            class : [
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                }
            ]
        },
        {
            subject : 'Chemistry',
            class : [
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                },
                {
                    title : 'Lorem ipsum',
                    description : 'Lorem ipsum dolor sit amet, consectetur',
                    duration : '3 month'
                }
            ]
        }
    ]
});
  //backend part
  // useEffect( async() => {
  //   try {
  //     const syl = await iitSyllabus();
  //     setAllCourses(syl.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  return (
    <div className="syllabus crash-home">
      <StudentSideBar />
      <div className="c-h-right">
        <CrashHeader />
        <div className="c-h-main">
          <div className="c-h-time">
            <h1>Syllabus</h1>
            <input type="date" name="date" />
          </div>
          {allCourses ? (
            <div className="time-table">
              <div className="best-cl">
                <h3>Maths</h3>
                <p
                  onClick={() => {
                    setSee1(true);
                  }}
                  style={{ display: `${see1 ? "none" : "flex"}` }}
                >
                  See All
                </p>
              </div>
              <div className="class-courses" id="c-h-course">
                {console.log(allCourses)}
                {allCourses.subjectsyllabus.map((eachSub) => {
                  if (eachSub.subject === "Maths")
                    if (!see1)
                      return eachSub.class.map((cls, index) => {
                        if (index < 3)
                          return (
                            <CourseSyllabus
                              key={index}
                              title={cls.title}
                              description={cls.description}
                              duration={cls.duration}
                            />
                          );
                      });
                    else
                      return eachSub.class.map((cls, index) => {
                        return (
                          <CourseSyllabus
                            key={index}
                            title={cls.title}
                            description={cls.description}
                            duration={cls.duration}
                          />
                        );
                      });
                })}
              </div>

              <div className="best-cl">
                <h3>Physics</h3>
                <p
                  onClick={() => {
                    setSee2(true);
                  }}
                  style={{ display: `${see2 ? "none" : "flex"}` }}
                >
                  See All
                </p>
              </div>
              <div className="class-courses" id="c-h-course">
                {allCourses.subjectsyllabus.map((eachSub, index) => {
                  if (eachSub.subject === "Physics")
                    if (!see2)
                      return eachSub.class.map((cls, index) => {
                        if (index < 3)
                          return (
                            <CourseSyllabus
                              key={index}
                              title={cls.title}
                              description={cls.description}
                              duration={cls.duration}
                            />
                          );
                      });
                    else
                      return eachSub.class.map((cls, index) => {
                        return (
                          <CourseSyllabus
                            key={index}
                            title={cls.title}
                            description={cls.description}
                            duration={cls.duration}
                          />
                        );
                      });
                })}
              </div>

              <div className="best-cl">
                <h3>Chemistry</h3>
                <p
                  onClick={() => {
                    setSee3(true);
                  }}
                  style={{ display: `${see3 ? "none" : "flex"}` }}
                >
                  See All
                </p>
              </div>
              <div className="class-courses" id="c-h-course">
                {allCourses.subjectsyllabus.map((eachSub, index) => {
                  if (eachSub.subject === "Chemistry")
                    if (!see3)
                      return eachSub.class.map((cls, index) => {
                        if (index < 3)
                          return (
                            <CourseSyllabus
                              key={index}
                              title={cls.title}
                              description={cls.description}
                              duration={cls.duration}
                            />
                          );
                      });
                    else
                      return eachSub.class.map((cls, index) => {
                        return (
                          <CourseSyllabus
                            key={index}
                            title={cls.title}
                            description={cls.description}
                            duration={cls.duration}
                          />
                        );
                      });
                })}
              </div>
            </div>
          ) : (
            <h1 style={{ textAlign: "center" }}>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
