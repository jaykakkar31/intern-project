import React, { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../common/Footer";

const SchoolClasses = () => {
  // data (will be fetched from backend)
  const history = useHistory();
  const boards = ["CBSE", "ICSE"];
  const courses = [
    {
      id: 1,
      name: "Class 11(Science)",
      board: "CBSE",
      classes: [
        { name: "Physics", id: 1 },
        { name: "Chemistry", id: 2 },
        { name: "Maths", id: 3 },
      ],
    },
    {
      id: 2,
      name: "Class 12(Science)",
      board: "CBSE",
      classes: [
        { name: "Physics", id: 1 },
        { name: "Chemistry", id: 2 },
        { name: "Maths", id: 3 },
      ],
    },
  ];
  const [selected, setSelected] = useState(courses[0].id);
  const [selectedBoard, setselectedBoard] = useState("CBSE");
  const handleBoardSelect = (category) => {
    setselectedBoard(category);
  };
  // function to get coures of selected course
  const getFiltered = () => {
    let filtered = [];
    for (let i in courses) {
      if (courses[i].board === selectedBoard) {
        filtered.push(courses[i]);
      }
    }
    return filtered;
  };
  const filteredCourses = getFiltered();
  return (
    <React.Fragment>
        <div className="container school">
          <div className="buttons">
            {boards.map((item) => (
              <button
                type="button"
                className={item === selectedBoard ? "btn btn-click" : "btn"}
                onClick={() => handleBoardSelect(item)}
                disabled={item==='ICSE'&&'true'}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="container row p-0 mt-3">
            <div className="col-3 ">
                <ul>
                    {filteredCourses.map((item) => (
                        <li>
                            <a
                                href={"#list-item" + item.id}
                                className={item.id === selected ? "selected" : ""}
                                onClick={() => setSelected(item.id)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="course-info col-9 row">
              <div
                data-bs-spy="scroll"
                data-bs-target="#list-example"
                data-bs-offset="50"
                className="scrollpy-example"
                tabIndex="0"
              >
                {filteredCourses.map((course) => (
                  <div className='course-scroll' id={"list-item" + course.id}>
                    <h3 className="course-title">
                      {selectedBoard} - {course.name}
                    </h3>
                    <div className="d-flex flex-row bd-highlight" >
                      {course.classes.map((subitem) => (
                        <div className="class-box col-3" onClick={()=>history.push("/educator/courses/comingsoon")}>
                          <img
                            src={require("../../images/download.png").default}
                            alt="download"
                            width="140px"
                            height="140px"
                          />
                          <h4 className="class-title">{subitem.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};
export default SchoolClasses;
