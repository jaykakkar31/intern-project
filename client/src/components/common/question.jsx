import React, { useState } from "react";
import "./contacts.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <div className="que_section">
        <header onClick={() => setShowInfo(!showInfo)}>
          <h6>{title}</h6>
          <button className="que_btn">
            {showInfo ? (
              <AiOutlineMinus size={24} color={"#000"} />
            ) : (
              <AiOutlinePlus size={24} color={"#000"} />
            )}
          </button>
        </header>
      </div>

      {showInfo && (
        <div className="answer">
          <p style={{ padding: "0" }}>{info}</p>
          <div className="underline"></div>
        </div>
      )}
    </article>
  );
};

export default Question;
