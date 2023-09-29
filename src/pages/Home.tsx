import { useState } from "react";
import { quesIDs } from "../data/quesIDs";
import "./Home.css";

const Home = () => {
  const [username, setUsername] = useState<string>();
  const [selQuesID, setSelQuesID] = useState<string[]>([]);
  const [time, setTime] = useState(0);
  const handleList = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelQuesID([...selQuesID, e.target.value]);
      setTime((prev) => prev + 5);
    } else {
      setSelQuesID(selQuesID.filter((prop) => prop != e.target.value));
      setTime((prev) => prev - 5);
    }
  };
  return (
    <main className="homeContainer">
      <form className="">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {quesIDs.map((prop) => (
          <div key={prop} className="" onChange={handleList}>
            <label>{prop}</label>
            <input name={prop} value={prop} type="checkbox" />
          </div>
        ))}
        <button>Start Test</button>
        <h4 className="">TIME: {time} min</h4>
      </form>
    </main>
  );
};

export default Home;
