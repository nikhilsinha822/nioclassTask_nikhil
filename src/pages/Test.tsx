import React, { useState, useEffect } from "react";
import Question from "../components/question";
import { quesIDs } from "../data/quesIDs";
import "./Test.css";

const Test = () => {
  const [currQues, setCurrQues] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    if (currQues === 0) {
      setIsFirst(true);
      setIsLast(false);
    } else if (currQues === quesIDs.length - 1) {
      setIsFirst(false);
      setIsLast(true);
    } else {
      setIsLast(false);
      setIsFirst(false);
    }
  }, [currQues]);
  const handleNext = () => {
    if (currQues != quesIDs.length - 1) {
      setCurrQues(currQues + 1);
    }
  };
  const handlePrev = () => {
    if (currQues != 0) {
      setCurrQues(currQues - 1);
    }
  };
  return (
    <main>
      <div className="testPage">
        <div className="navSection">
          <h4>Time: {}</h4>
          <span>
            {quesIDs.map((value, index) => (
              <button
                className="ques"
                key={index}
                onClick={() => {
                  setCurrQues(index);
                }}
              >
                {index + 1}
              </button>
            ))}
          </span>
          <button className="submit">Submit</button>
        </div>
        <div className="quesSection">
          <span className="ques">
            {currQues + 1}. &nbsp; {<Question quesID={quesIDs[currQues]} />}
          </span>
          <span className="navBtns">
            {!isFirst && (
              <button className="prev" onClick={handlePrev}>
                Prev
              </button>
            )}
            {!isLast ? (
              <button className="next" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="submit">Submit</button>
            )}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Test;
