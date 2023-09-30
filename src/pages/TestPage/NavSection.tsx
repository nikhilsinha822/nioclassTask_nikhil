import {useContext} from "react";
import userContext from "../../contexts/userContext";
import TimeCounter from "../../components/TimeCounter";

const NavSection = () => {
  const { selQuesID, setCurrQues } = useContext(userContext);
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
      <button className="submit">Submit</button>
    </div>
  );
};

export default NavSection;
