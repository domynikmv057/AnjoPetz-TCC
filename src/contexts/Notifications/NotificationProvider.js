import { createContext, useReducer } from "react";
import { Notification } from "./Notification";
import "./Notification.css";

export const NotificationContext = createContext();

export const NotificationProvaider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-wrapper">
        {state.map((note, index) => {
          return <Notification dispatch={dispatch} key={index} {...note} />;
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};
