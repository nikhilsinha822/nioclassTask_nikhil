import {useContext} from "react";
import userContext from "../../contexts/userContext";
import TimeCounter from "../../components/TimeCounter";
import { useNavigate } from "react-router-dom";

const NavSection = () => {
  const { selQuesID, setCurrQues, setisFinished } = useContext(userContext);
  const Navigate = useNavigate();
  const handleSubmit = () => {
    setisFinished(true);
    Navigate('/result');
  }
  
  return (
    <div className="navSection">
      <TimeCounter/>
      <span>
        {selQuesID.map((value, index) => (
          <button
            className="ques"
            key={index}
            value={value}
            onClick={() => {
              setCurrQues(index);
            }}
          >
            {index + 1}
          </button>
        ))}
      </span>
      <button className="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NavSection;
