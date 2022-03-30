import { useState } from "react";
import "./RegisterUser.css";
export const RegisterUser = () => {
  const [registerForm, setRegisterForm] = useState();
  const [formValidation, setFormValidation] = useState(true);
  const [identicalPasswords, setIdenticalPasswords] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(registerForm);
  };

  const handleSamePasswords = (e) => {
    const samePasswords = e.target.value;
    console.log(samePasswords);
    if (samePasswords === registerForm.senha) {
      setFormValidation(false);
      setIdenticalPasswords(true);
    } else {
      setFormValidation(true);
      setIdenticalPasswords(false);
    }
  };

  return (
    <section className="main-login-container">
      <form id="loginForm">
        <div className="title-style">
          <h1>Cadastrar</h1>
        </div>
        <fieldset>
          <legend>Dados de login</legend>
          <section className="input-container">
            <p>
              <label htmlFor="email_register">Email: </label>
              <input
                id="email_register"
                name="email"
                required="required"
                type="email"
                placeholder="exemple@gmail.com"
                onChange={handleChange}
              />
            </p>

            <p>
              <label htmlFor="senha_register">Senha: </label>
              <input
                id="senha_register"
                name="senha"
                required="required"
                type="password"
                placeholder="1234"
                onChange={handleChange}
              />
            </p>

            <p>
              <label htmlFor="confirmSenha_register">Confirmar Senha: </label>
              <input
                id="confirmSenha_register"
                name="confirmSenha_register"
                required="required"
                type="password"
                placeholder="1234"
                onChange={handleSamePasswords}
              />
            </p>
            <p className="error-mensage">
              {identicalPasswords === false ? "As senhas nao correspondem" : ""}
            </p>
            <div className="btn-login">
              <button
                disabled={formValidation}
                className={
                  formValidation ? "btn-primary-disabled" : "btn-primary"
                }
                onClick={handleSubmit}
              >
                Cadastrar
              </button>
            </div>
          </section>
        </fieldset>
      </form>
    </section>
  );
};
