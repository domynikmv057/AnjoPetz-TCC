import "./HeaderNav.css";

export const HeaderNav = () => {
  return (
    <header>
      <section>
        <img src="logo" alt="#" />
        <h1> AnjoPetz </h1>
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
