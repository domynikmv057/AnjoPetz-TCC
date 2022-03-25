import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from "../../Pages/AboutUs/AboutUs";
import { Adopt } from "../../Pages/Adopt/Adopt";
import { Help } from "../../Pages/Help/Help";
import { Main } from "../../Pages/Main/Index";
import { Register } from "../../Pages/Register/Register";

export const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/adotar" element={<Adopt />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/registrar" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
