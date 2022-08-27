import React, { useState } from "react";
import Live from "../classes/live";
import Ongoing from "../classes/ongoing";
import Upcoming from "../classes/upcoming";
import Best from "../classes/best";
import Subjects from "../classes/subject";

const Batches_type = ({student}) => {
  const [buttonId, setButtonId] = useState(1);

  return (
    <div className="batches_type">
      <div className='main-cat'>
        <div className="category">
          <button
            onClick={() => setButtonId(1)}
            className={buttonId === 1 ? "active-3" : null}
          >
            Free live classes
          </button>
          <button
            onClick={() => setButtonId(2)}
            className={buttonId === 2 ? "active-3" : null}
          >
            Ongoing Batches
          </button>
          <button
            onClick={() => setButtonId(3)}
            className={buttonId === 3 ? "active-3" : null}
          >
            Upcoming Batches
          </button>
          <button
            onClick={() => setButtonId(4)}
            className={buttonId === 4 ? "active-3" : null}
          >
            Best Batches
          </button>
          <button
            onClick={() => setButtonId(5)}
            className={buttonId === 5 ? "active-3" : null}
          >
            Subjects
          </button>
        </div>
      </div>
      
      <div className="batches_text">
     
      </div>
      {buttonId === 1 && <Live student={student} />}
      {buttonId === 2 && <Ongoing student={student} />}
      {buttonId === 3 && <Upcoming student={student} />}
      {buttonId === 4 && <Best student={student} />}
      {buttonId === 5 && <Subjects student={student} />}
    </div>
  );
};

export default Batches_type;
