import React from "react";
import Batch_head from "./sections/Batch_head";
import Batches_type from "./sections/Batches_type";
import Educator from "./sections/Educator";
import Features from "./sections/Features";
import Plans from "./sections/plans";

import "./batches.scss";

const Batch = ({student}) => {
  return (
    <div className="batch_page">
      <Batch_head student={student}/>
      <Batches_type student={student} />
      <Educator />
      <Features />
      <Plans student={student}/>
    </div>
  );
};

export default Batch;
