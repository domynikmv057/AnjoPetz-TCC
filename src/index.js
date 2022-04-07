import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NotificationProvaider } from "./contexts/Notifications/NotificationProvider";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvaider>
      <App />
    </NotificationProvaider>
  </React.StrictMode>,
  document.getElementById("root")
);
