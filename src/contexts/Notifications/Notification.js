import { useEffect, useState } from "react";
import "./Notification.css";

export const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalId] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);
    setIntervalId(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  const handleCloseNotification = () => {
    setExit(true);
    handlePauseTimer();
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${
        props.type === "SUCCESS" ? "success" : "error"
      } ${exit ? "exit" : ""} `}
    >
      <p>{props.message}</p>
      <div className={"bar"} style={{ width: `${width}%` }} />
    </div>
  );
};
