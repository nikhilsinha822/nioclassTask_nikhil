import { useContext, useEffect } from "react";
import userContext from "../../contexts/userContext";
import Question from "../../components/Question";
import { useNavigate } from "react-router-dom";

const quesSection = () => {
  const {
    selQuesID,
    isFirst,
    isLast,
    isFinished,
    setisFinished,
    handleNext,
    handlePrev,
    currQues,
    perquesTimer,
    setperquesTimer,
  } = useContext(userContext);
  const Navigate = useNavigate();
  !isFinished && useEffect(() => {
    const interval = setInterval(() => {
      const temp = perquesTimer;
      const sec = temp[currQues].sec + 1;
      const min = sec === 60 ? temp[currQues].min + 1 : temp[currQues].min;
      const hours =
        min === 60 ? temp[currQues].hours + 1 : temp[currQues].hours;
      temp[currQues] = {
        hours: hours % 24,
        min: min % 60,
        sec: sec % 60,
      };
      setperquesTimer([...temp]);
    }, 1000);
    return () => clearInterval(interval);
  }, [currQues]);

  const handleSubmit = () => {
    setisFinished(true)
    Navigate("/result");
  };

  return (
    <div className="quesSection">
      <span className="ques">
        {currQues + 1}. &nbsp; {<Question quesID={selQuesID[currQues]} />}
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
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </span>
    </div>
  );
};

export default quesSection;
