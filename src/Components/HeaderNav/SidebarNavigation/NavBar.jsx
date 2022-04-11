import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useContext, useState } from "react";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import AuthContext from "../../../contexts/Auth/Auth";
import { NotificationContext } from "../../../contexts/Notifications/NotificationProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../Services/Firebase/Firebase";

export const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useContext(NotificationContext);
  const UserContext = useContext(AuthContext);

  const LogOut = () => {
    signOut(auth);
    setSidebar(!sidebar);

    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: 1,
        type: "SUCCESS",
        message: `Deslogado com sucesso`,
      },
    });
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: " #fff" }}>
        <div className="nav-bar">
          <span className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </span>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((iten, index) => {
              return (
                <li key={index} className={iten.cName}>
                  <Link to={iten.path} onClick={showSidebar}>
                    {iten.icons}
                    <span>{iten.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              {UserContext.user ? (
                <div
                  to="/registrar"
                  onClick={(e) => {
                    LogOut();
                  }}
                >
                  <AiIcons.AiOutlineLogin />
                  <span>Sair</span>
                </div>
              ) : (
                <Link to="/registrar" onClick={showSidebar}>
                  <AiIcons.AiOutlineLogin />
                  <span>Login</span>
                </Link>
              )}
            </li>
          </ul>

          <div>
            <h1>MENU USUARIO</h1>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
