import { useContext } from "react";
import userContext from "../../contexts/userContext";
import Question from "../../components/Question";

const quesSection = () => {
  const { selQuesID, isFirst, isLast, handleNext, handlePrev, currQues } = useContext(userContext);
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
          <button className="submit">Submit</button>
        )}
      </span>
    </div>
  );
};

export default quesSection;
