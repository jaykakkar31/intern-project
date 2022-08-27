import React, { useState } from "react";
import Footer from "../common/Footer";
import "./courses.scss";

const Institutes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const institutes = [
    {
      name: "lorem ipsum",
      categogry: "Class 5 to 12",
      address: "",
    },
    {
      name: "lorem ipsum",
      categogry: "Class 5 to 12",
      address: "",
    },
    {
      name: "lorem ipsum",
      categogry: "IIT & NEET",
      address: "",
    },
    {
      name: "lorem ipsum",
      categogry: "IIT & NEET",
      address: "",
    },
    {
      name: "lorem ",
      categogry: "Class 5 to 12",
      address: "",
    },
    {
      name: "lorem ipsum",
      categogry: "Competetive Exam",
      address: "",
    },
    {
      name: "lorem ipsum",
      categogry: "Competetive Exam",
      address: "",
    },
    {
      name: "lorem ipsum",
      categogry: "Competetive Exam",
      address: "",
    },
    {
      name: "lorem dolar",
      categogry: "Class 5 to 12",
      address: "",
    },
    {
      name: "lorem  dolar",
      categogry: "UPSC Exam Preparation",
      address: "",
    },
  ];
  const categories = [
    "Class 5 to 12",
    "IIT & NEET",
    "Bank Exam",
    "UPSC Exam Preparation",
    "Competetive Exam",
  ];
  const [selectedCategory, setselectedCategory] = useState("");
  const handleCategory = (category) => {
    setselectedCategory(category);
  };
  const filteredInstitutes =
    selectedCategory !== ""
      ? institutes.filter((i) => i.categogry === selectedCategory)
      : institutes;
  const clear = () => {
    setselectedCategory("");
  };
  return (
    <React.Fragment>
      <div className="institute">
        <input
          type="text"
          className="form-control search ml-4"
          placeholder="Search Insitutes"
          onChange={handleChange}
        />
        <div className="row m-0">
          <div className="filter col-3">
            <div className="d-flex justify-content-between">
              <h2>
                Filter <i class="fa fa-filter" aria-hidden="true"></i>
              </h2>
              <button className="filter-button btn p-0" onClick={clear}>
                CLEAR ALL
              </button>
            </div>
            {categories.map((category) => (
              <div
                className="filter-options"
                onClick={() => handleCategory(category)}
              >
                <input
                  className="form-check-input ml-0.5"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={selectedCategory === category}
                ></input>
                <label> {category}</label>
              </div>
            ))}
          </div>
          <div className="col-9 row">
            {filteredInstitutes
              .filter((val) => {
                if (searchQuery === "") return val;
                else if (
                  val.name
                    .toLocaleLowerCase()
                    .includes(searchQuery.toLocaleLowerCase())
                )
                  return val;
              })
              .map((institute) => (
                <div className="col-3 card-courses">
                  <img
                    className="card-img-top p-0"
                    alt="institute"
                    src={require("../../images/building.jpg").default}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{institute.name}</h6>
                    <p className="card-text">{institute.categogry}</p>
                    {/* eslint-disable-next-line */}
                    <a className="btn btn-outline-success">More Details </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Institutes;
