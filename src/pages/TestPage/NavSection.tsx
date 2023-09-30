import {useContext} from "react";
import userContext from "../../contexts/userContext";

const NavSection = () => {
  const { selQuesID, setCurrQues} = useContext(userContext);
  return (
    <div className="navSection">
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
