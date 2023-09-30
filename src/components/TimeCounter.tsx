import { useContext, useEffect } from "react";
import userContext from "../contexts/userContext";

const TimeCounter = () => {
  const { setTimeCounter, timeCounter } = useContext(userContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeCounter((prevTime) => {
        const sec = prevTime.sec + 1;
        const min = sec === 60 ? prevTime.min + 1 : prevTime.min;
        const hours = min === 60 ? prevTime.hours + 1 : prevTime.hours;

        return {
          hours: hours % 24,
          min: min % 60,
          sec: sec % 60,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span>
        {timeCounter.hours >= 10 ? timeCounter.hours : `0${timeCounter.hours}`}:
        {timeCounter.min >= 10 ? timeCounter.min : `0${timeCounter.min}`}:
        {timeCounter.sec >= 10 ? timeCounter.sec : `0${timeCounter.sec}`}
      </span>
    </div>
  );
};

export default TimeCounter;
