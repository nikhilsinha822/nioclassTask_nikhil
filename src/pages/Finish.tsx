import { useContext } from "react";
import userContext from "../contexts/userContext";
import "./Finish.css";
import { Navigate } from "react-router-dom";

const Finish = () => {
  const { username, perquesTimer, selQuesID, timeCounter } =
    useContext(userContext);
  return (
    <div className="resultbox">
    {timeCounter.sec===0 && timeCounter.min===0 && timeCounter.hours===0 && <Navigate to="/" replace={true}/>}
      <div>
        <div style={{ padding: "10px" }}>
          <strong>
            <h2 style={{ textAlign: "center" }}>Finished</h2>
          </strong>
          <h3 style={{ textAlign: "center" }}>{username}</h3>
        </div>
        <div>
          <div className="resultContainer">
            <div>
              <div style={{ padding: "10px" }}>
                <strong>Question</strong>
              </div>
              {selQuesID.map((prop) => (
                <div style={{ padding: "10px" }}>{prop}</div>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ padding: "10px" }}>
                <strong>Time</strong>
              </div>
              {perquesTimer.map((prop) => (
                <div style={{ padding: "10px" }}>
                  {prop.hours}:{prop.min}:{prop.sec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
