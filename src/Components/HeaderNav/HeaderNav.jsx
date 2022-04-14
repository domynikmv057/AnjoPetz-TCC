import "./HeaderNav.css";
import logo from "../../Assets/LogoAnjoPetz v2.png";
import { NavBar } from "./SidebarNavigation/NavBar";

export const HeaderNav = () => {
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
