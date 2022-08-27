import React from "react";
import { useHistory } from "react-router";
const Batch_head = ({student}) => {
  const history = useHistory();
  return (
    <div className="batch_section">
      <div className="head">
        <div className="head_text">
          <h1 className="crack">
            Crack <span>IIT & NEET</span> with India’s first{" "}
          </h1>
          <h1> AI enabled E - learning platform</h1>
          <br />
          <button onClick={() => history.push(student._id?'/iitjee':'/students/login')} className="subscribe_btn">Subscribe Now</button>
        </div>
        <div className="head_image">
          <img src={require("../img/batches.png").default} />
        </div>
      </div>
      <button onClick={() => history.push('/iitjee')} className="sm-subscribe_btn">Subscribe Now</button>
    </div>
  );
};

export default Batch_head;
