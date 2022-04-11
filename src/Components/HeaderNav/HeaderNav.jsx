import "./HeaderNav.css";
import logo from "../../Assets/LogoAnjoPetz.png";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth/Auth";
import { NavBar } from "./SidebarNavigation/NavBar";

export const HeaderNav = () => {
  const UserContext = useContext(AuthContext);
  const AuthUser = UserContext.user;
  return (
    <header>
      <section className="logo-container">
        <img src={logo} alt="logo" width={"60px"} />
        <h1>
          Anjo<span>Petz</span>
        </h1>
      </section>
      <section className="nav-container">
        <NavBar />
      </section>
    </header>
  );
};
