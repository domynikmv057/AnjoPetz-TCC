import "./Login.css";
export const Login = () => {
  return (
    <section className="main-login-container">
      <form id="loginForm">
        <div className="title-style">
          <h1>Login</h1>
        </div>
        <fieldset>
          <legend>Dados de login</legend>
          <section className="input-container">
            <p>
              <label htmlFor="email_login">Email: </label>
              <input
                id="email_login"
                name="email_login"
                required="required"
                type="email"
                placeholder="exemple@gmail.com"
              />
            </p>

            <p>
              <label htmlFor="senha_login">Senha: </label>
              <input
                id="senha_login"
                name="senha_login"
                required="required"
                type="password"
                placeholder="1234"
              />
            </p>
            <div className="btn-login">
              <button className="btn-primary">Entrar</button>
            </div>
          </section>
        </fieldset>
      </form>
    </section>
  );
};
