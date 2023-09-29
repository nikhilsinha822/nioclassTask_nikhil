import React, { useState } from "react";
import Question from "../components/question";
import { quesIDs } from "../data/quesIDs";
import "./Test.css";

const Test = () => {
  const [currQues, setCurrQues] = useState(0);
  const handleNext = () => {
    if (currQues != quesIDs.length - 1) {
      setCurrQues(currQues + 1);
    }
    console.log(currQues);
  };
  const handlePrev = () => {
    if (currQues != 0) {
      setCurrQues(currQues - 1);
    }
    console.log(currQues);
  };
  return (
    <main className="testPage">
      <div className="quesSection">
        {<Question quesID={quesIDs[currQues]} />}
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
      <button className="submit">Submit</button>
    </main>
  );
};

export default Test;
