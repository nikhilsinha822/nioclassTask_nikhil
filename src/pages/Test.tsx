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
        <span className="ques">
          {currQues + 1}. &nbsp; {<Question quesID={quesIDs[currQues]} />}
        </span>
        <span className="navBtns">
          <button className="prev" onClick={handlePrev}>
            Prev
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </span>
      </div>
      <div className="navSection">
        <span>
          {quesIDs.map((value, index) => (
            <button
              className="ques"
              key={index}
              onClick={() => setCurrQues(index)}
            >
              {index + 1}
            </button>
          ))}
        </span>
        <button className="submit">Submit</button>
      </div>
    </main>
  );
};

export default Test;
