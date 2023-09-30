import { useContext } from "react";
import { quesIDs } from "../data/quesIDs";
import userContext from "../contexts/userContext";

import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { username, setUsername, time, selQuesID, setSelQuesID, setTime } = useContext(userContext);
  const Navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (username == undefined || username === "") alert("username is required");
    else if (selQuesID.length == 0) {
      alert("select atleast one ques");
    } else {
      Navigate("/test");
    }
  };
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
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />
        {quesIDs.map((prop) => (
          <div key={prop} onChange={handleList}>
            <label>{prop}</label>
            <input name={prop} value={prop} type="checkbox"/>
          </div>
        ))}
        <button onClick={handleClick}>Start Test</button>
        <h4 className="">TIME: {time} min</h4>
      </form>
    </main>
  );
};

export default Home;
