import NavSection from "./NavSection";
import QuesSection from "./QuesSection";
import { useContext } from "react";
import userContext from "../../contexts/userContext";
import "./Test.css";
import { Navigate } from "react-router-dom";

const Test = () => {
  const { username, selQuesID, strtTime, isFinished } = useContext(userContext);
  return (
    <main>
      {(username === null ||
        username === "" ||
        selQuesID.length === 0 ||
        strtTime.hours < 0) && <Navigate to="/" />}
      {
        isFinished && <Navigate to="/result"/>
      }
      <div className="testPage">
        <NavSection />
        <QuesSection />
      </div>
    </main>
  );
};

export default Test;
