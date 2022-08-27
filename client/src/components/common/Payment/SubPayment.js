import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import { batch, useDispatch, useSelector } from "react-redux";
import "./SubPayment.css";
import "./FullPayment.css";
import { addSubject, removeSubject } from "../../../actions/payment";
function SubPayment({ subject, duration, price }) {
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    setCheck((prev) => !prev);
    if(check){
      console.log(check);
      dispatch(addSubject(price));
    }
     
    else 
      dispatch(removeSubject(price));
  };
  return (
    <div className="subject-pay">
      <div className="choose-sub">
        <h2>{subject}</h2>
        <Checkbox onClick={handleClick} style={{ marginTop: "-10px" }} />
      </div>
      <div className="full-p-m">
        <h1>{duration}</h1>
        <p>Save 500</p>
      </div>
      <div className="full-rate">
        <h1>₹ {price}</h1>
        <p>Total</p>
      </div>
    </div>
  );
}

export default SubPayment;
