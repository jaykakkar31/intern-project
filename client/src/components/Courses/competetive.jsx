import React, {useState} from 'react';
import Footer from "../common/Footer";
import { useHistory } from 'react-router';
const Competetive = () => {
    const history = useHistory();
    const courses =
        [
            {
                id: 1,
                name: "Engineering entrance",
                classes:
                    [
                        { name: "Frontend", id: 1 },
                        { name: "Backend", id: 2 },
                        { name: "Full Stack", id: 3 },
                        { name: "DSA", id: 4 },
                    ]
            },
            {
                id: 2,
                name: "English",
                classes: [
                    { name: "English Speaking", id: 1 },
                    { name: "Body Language", id: 2 },
                    
                ]
            },
           
        ];
        const [selected, setSelected] = useState(courses[0].id);
        const handleSelect = (id) => {
            setSelected(id);
        }
    return (
        <React.Fragment>
            <div className="container competetive">
                <div className="row">
                    <div className="col-3" id="bar">
                            <ul>
                                {courses.map((item) => (
                                    <li key={item.id} className={item.id === selected ? "selected" : ""}><a href={"#list-item" + item.id} onClick={() => handleSelect(item.id)}>{item.name}</a></li>
                                ))}
                            </ul>
                    </div>
                    <div className="col-9 course-info">
                        <div data-bs-spy="scroll" data-bs-target="#bar" data-bs-offset="50" className="scrollpy-example" tabIndex="0">
                            {courses.map((course) => (
                                <div className='course-scroll' id={"list-item" + course.id} key={course.id}>
                                    <h3 className="course-title">{course.name}</h3>
                                    <div className="d-flex flex-row bd-highlight">
                                        {course.classes.map((subitem) => (
                                            // Redirect to batch page
                                            <div className="class-box" key={subitem.id} onClick={() => history.push('/students/batch') }>
                                                <img src={require('../../images/download.png').default} alt="download" width="140px" height="140px" />
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
}
export default Competetive;