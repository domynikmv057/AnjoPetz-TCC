import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/Auth/Auth";
import { AboutUs } from "../../Pages/AboutUs/AboutUs";
import { Adopt } from "../../Pages/Adopt/Adopt";
import { Help } from "../../Pages/Help/Help";
import { Main } from "../../Pages/Main/Index";
import { Register } from "../../Pages/Register/Register";

export const ConfigRoutes = () => {
  const context = useContext(AuthContext);

  const PrivateRoute = ({ children, redirectTo }) => {
    console.log(context.authUser);
    const isAuthenticated = context.authUser;
    if (isAuthenticated !== false) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/registrar">
              <Main />
            </PrivateRoute>
          }
        />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/adotar" element={<Adopt />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/registrar" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
