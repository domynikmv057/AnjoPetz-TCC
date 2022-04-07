import "./HeaderNav.css";
import logo from "../../Assets/LogoAnjoPetz.png";

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
        <ul>
          <li> Quem Somos </li>
          <li> Adotar </li>
          <li> Ajudar </li>
        </ul>
        <div className="btn-container">
          <button className="btn-secondary"> Cadastrar </button>
          <button className="btn-secondary"> Entrar </button>
        </div>
      </section>
    </header>
  );
};
