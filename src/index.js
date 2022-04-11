import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/Auth/Auth";
import { NotificationProvaider } from "./contexts/Notifications/NotificationProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NotificationProvaider>
        <App />
      </NotificationProvaider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
