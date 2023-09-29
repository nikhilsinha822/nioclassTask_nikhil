import Question from "../../components/Question";

type quesSection = {
  currQues: number;
  isFirst: boolean;
  isLast: boolean;
  quesIDs: string[];
  handlePrev: () => void;
  handleNext: () => void;
};
const quesSection = ({
  currQues,
  isFirst,
  isLast,
  quesIDs,
  handlePrev,
  handleNext,
}: quesSection) => {
  return (
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
  );
};

export default quesSection;
