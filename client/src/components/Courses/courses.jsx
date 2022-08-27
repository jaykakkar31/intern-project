import React, { useState, useEffect } from 'react';
import './courses.scss';
import queryString from  "query-string";
import Competetive from './competetive';
import SchoolClasses from './schoolClasses';
import Institutes from './institutes';

const Course = ({ history, location }) => {
    const { track } = queryString.parse(location.search);
    const courseCategories = [{ id: 1, name: "Competetive Exams" },
    { id: 2, name: "School Classes" },
    { id: 3, name: "Institutes" }]
    useEffect(() => {
        for (let i in courseCategories) {
            console.log(typeof(courseCategories[i].id), typeof(track));
            if (courseCategories[i].id == track) {
                setSelected(courseCategories[i]);
            }
        }
    }, []);
    const [selected, setSelected] = useState({ id: 1, name: "Competetive Exams" });
    const handleCategorySelect = (category) => {
        setSelected(category); 
        history.push(`?track=${category.id}`);
    }
    return (
        <div className="container-fluid p-0">
            <div className="background">
                <div className="heading">
                    <div>
                    <h1>Comprehensive learning for <br/><span>Competitive Exam</span></h1>
                    <br/>
                    <h3>Get a curriculum-aligned Live Classes.</h3>
                    <br/>
                    <h3>In class, get your doubts cleared up.</h3>
                    </div>
                    <img src='/images/courses.png'/>
                </div>
                <div className="button-group">
                    {courseCategories.map((item,index) => {
                          return  <button key={item.id} type="button" className={item.name === selected.name ? "btn btn-click" : "btn"}
                                onClick={() => handleCategorySelect(item)}>{item.name}</button>
                })}
                </div>
            </div>
            <div className="courses-catalog p-0">
                {selected.name === "Competetive Exams" && <Competetive />}
                {selected.name === "School Classes" && <SchoolClasses />}
                {selected.name === "Institutes" && <Institutes />}
            </div>
        </div>
    );
}
export default Course;