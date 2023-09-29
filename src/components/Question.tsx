import { useState, useEffect } from "react";
import MathJax from "better-react-mathjax/MathJax";

const Question = ({query}:{query: string}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}${query}`
      );
      const data = await res.json();
      setData(data);
    })();
  }, []);
  return (
    <>
      {data.map((prop: { QuestionID: string; Question: string }) => (
        <>{<MathJax key={prop.QuestionID}>{prop.Question}</MathJax>}</>
      ))}
    </>
  );
};

export default Question;
