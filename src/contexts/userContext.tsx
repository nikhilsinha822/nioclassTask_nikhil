import { useState, useEffect, createContext } from "react";

type userproviderProps = {
  children: React.ReactNode;
};

type strtTimeType = {
  hours: number;
  min: number;
  sec: number;
};

type Time = {
  hours: number;
  min: number;
  sec: number;
};

type userContextType = {
  username: string;
  selQuesID: string[];
  time: number;
  isFirst: boolean;
  isLast: boolean;
  currQues: number;
  strtTime: strtTimeType;
  timeCounter: Time,
  setTimeCounter: React.Dispatch<React.SetStateAction<Time>>,
  setStrtTime: React.Dispatch<React.SetStateAction<strtTimeType>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setSelQuesID: React.Dispatch<React.SetStateAction<string[]>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setCurrQues: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handlePrev: () => void;
};

const defaultTime = {
  hours: -1,
  min: -1,
  sec: -1,
} as strtTimeType;

const defaultTimeCounter = {
    hours: 0, 
    min: 0, 
    sec: 0 
} as Time;

const defaultuser = {
  username: " ",
  selQuesID: [" "],
  time: 0,
  isFirst: true,
  isLast: false,
  currQues: 0,
  strtTime: defaultTime,
  timeCounter: defaultTimeCounter,
  setTimeCounter: () => {},
  setStrtTime: () => {},
  setUsername: () => {},
  setSelQuesID: () => {},
  setTime: () => {},
  setCurrQues: () => {},
  handleNext: () => {},
  handlePrev: () => {},
} as userContextType;

const userContext = createContext<userContextType>(defaultuser);

export const UserProvider = ({ children }: userproviderProps) => {
  const [username, setUsername] = useState<string>("");
  const [selQuesID, setSelQuesID] = useState<string[]>([]);
  const [time, setTime] = useState<number>(0);
  const [strtTime, setStrtTime] = useState<strtTimeType>(defaultTime);
  const [currQues, setCurrQues] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(true);
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const [timeCounter, setTimeCounter] = useState<Time>(defaultTimeCounter);

  useEffect(() => {
    if (currQues === 0) {
      setIsFirst(true);
      setIsLast(false);
    } else if (currQues === selQuesID.length - 1) {
      setIsFirst(false);
      setIsLast(true);
    } else {
      setIsLast(false);
      setIsFirst(false);
    }
  }, [currQues]);

  const handleNext = () => {
    if (currQues != selQuesID.length - 1) {
      setCurrQues(currQues + 1);
    }
  };
  const handlePrev = () => {
    if (currQues != 0) {
      setCurrQues(currQues - 1);
    }
  };

  return (
    <userContext.Provider
      value={{
        username,
        selQuesID,
        time,
        isFirst,
        isLast,
        currQues,
        strtTime,
        timeCounter,
        setTimeCounter,
        setStrtTime,
        setCurrQues,
        setUsername,
        setSelQuesID,
        setTime,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
