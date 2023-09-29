import { useState, useEffect } from "react";
import { quesIDs } from "../../data/quesIDs";
import NavSection from "./NavSection";
import QuesSection from "./QuesSection";
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
        <NavSection quesIDs={quesIDs} setCurrQues={setCurrQues} />
        <QuesSection
          handlePrev={handlePrev}
          handleNext={handleNext}
          currQues={currQues}
          isFirst={isFirst}
          isLast={isLast}
          quesIDs={quesIDs}
        />
      </div>
    </main>
  );
};

export default Test;
