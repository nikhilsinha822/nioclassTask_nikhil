import React from "react";

type navProps = {
  quesIDs: string[];
  setCurrQues: React.Dispatch<React.SetStateAction<number>>;
};

const NavSection = ({ quesIDs, setCurrQues }: navProps) => {
  return (
    <div className="navSection">
      <span>
        {quesIDs.map((value, index) => (
          <button
            className="ques"
            key={index}
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
