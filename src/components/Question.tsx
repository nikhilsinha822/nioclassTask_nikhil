import { useState, useEffect } from "react";
import MathJax from "better-react-mathjax/MathJax";

const Question = ({quesID}:{quesID: string}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}${quesID}`);
      const data = await res.json();
      setData(data);
    })();
  },[quesID]);
  return (
    <div>
      {data.map((prop: { QuestionID: string; Question: string }) => (
        <MathJax style={{maxWidth: "100vw", overflowX:"scroll"}} key={prop.QuestionID}>{prop.Question}</MathJax>
      ))}
    </div>
  );
};

export default Question;
