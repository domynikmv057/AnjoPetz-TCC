import "./reset.css";
import "./General.css";
import { HeaderNav } from "./Components/HeaderNav/HeaderNav";
import AuthContext from "./contexts/Auth/Auth";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Adopt } from "./Pages/Adopt/Adopt";
import { Register } from "./Pages/Register/Register";
import { Main } from "./Pages/Main/Index";

function App() {
  const UserContext = useContext(AuthContext);

  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = UserContext.user;
    if (isAuthenticated) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  };
  const PrivateRouteLogin = ({ children, redirectTo }) => {
    const isAuthenticated = UserContext.user;
    if (!isAuthenticated) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  };
  return (
    <div className="App">
      <Router>
        <HeaderNav />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/registrar">
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/sobre-nos"
            element={
              <PrivateRoute redirectTo="/registrar">
                <AboutUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/adotar"
            element={
              <PrivateRoute redirectTo="/registrar">
                {" "}
                <Adopt />
              </PrivateRoute>
            }
          />
          <Route
            path="/registrar"
            element={
              <PrivateRouteLogin redirectTo="/">
                {" "}
                <Register />
              </PrivateRouteLogin>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
