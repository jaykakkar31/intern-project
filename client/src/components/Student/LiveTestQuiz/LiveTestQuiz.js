import React, { useEffect, useState } from "react";
import StudentSideBar from "../../common/Sidebar/StudentSideBar";
import Test from "../../common/Test/Test";
import CrashHeader from "../../common/CrashHeader/CrashHeader";
import { classUpdate } from "../../../services/api";
function LiveTestquiz() {
  const [see1, setSee1] = useState(false);
  const [see2, setSee2] = useState(false);
  const [classData, setClassData] = useState({
    testquiz : [
      {
          date : 'Today',
          test : [
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'10 am',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'12 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'3 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'3 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'3 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'6 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
          ]
      },

      {
          date :'Tomorrow',
          test : [
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'10 am',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'12 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'3 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'3 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'3 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
              {
                  topic:'Basic Fundamental of Organic Chemistry',
                   time:'6 pm',
                   subject :'Chemistry',
                   duration : '1 hour',
              },
          ]
      },
  ],
  });

  //backend
  // useEffect( async() => {
  //   try {
  //     const clsData = await classUpdate();
  //     setClassData(clsData.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  return (
    <div className="live-test-quiz crash-home">
      <StudentSideBar />
      <div className="c-h-right">
        <CrashHeader />
        <div className="c-h-main">
          <div className="c-h-time">
            <h1>Live Test and Quizzes</h1>
            <input type="date" name="date" />
          </div>
          {classData ? (
            <div className="time-table">
              <div className="best-cl">
                <h3>Today's Live Tests</h3>
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
                {classData.testquiz.map((eachTest) => {
                  if (eachTest.date === "Today")
                    if (!see1)
                      return eachTest.test.map((tst, index) => {
                        if (index < 3)
                          return (
                            <Test
                              key={index}
                              topic={tst.topic}
                              subject={tst.subject}
                              time={`Today ${tst.time}`}
                              duration={tst.duration}
                            />
                          );
                      });
                    else
                      return eachTest.test.map((tst, index) => {
                        return (
                          <Test
                            key={index}
                            subject={tst.subject}
                            topic={tst.topic}
                            time={`Today ${tst.time}`}
                            duration={tst.duration}
                          />
                        );
                      });
                })}
              </div>
              <div className="best-cl">
                <h3>Upcoming Tests and quizzes</h3>
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
                {classData.testquiz.map((eachTest) => {
                  if (eachTest.date === "Tomorrow")
                    if (!see2)
                      return eachTest.test.map((tst, index) => {
                        if (index < 3)
                          return (
                            <Test
                              key={index}
                              topic={tst.topic}
                              subject={tst.subject}
                              time={`Tomorrow ${tst.time}`}
                              duration={tst.duration}
                            />
                          );
                      });
                    else
                      return eachTest.test.map((tst, index) => {
                        return (
                          <Test
                            key={index}
                            subject={tst.subject}
                            topic={tst.topic}
                            time={`Tomorrow ${tst.time}`}
                            duration={tst.duration}
                          />
                        );
                      });
                })}
              </div>
            </div>
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveTestquiz;
