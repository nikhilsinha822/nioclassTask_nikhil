import Question from "../components/question";
import { quesIDs } from "../data/quesIDs";

const Test = () => {
  return (
    <>
      {quesIDs.map((prop)=><Question query={prop}/>)}
    </>
  );
};

export default Test;
