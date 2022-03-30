import "./RegisterUser.css";
import { useState } from "react";
import { EmailRegex } from "../../Services/RegexValidator/RegexValidator";
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../../Services/Firebase/Firebase.js"

export const RegisterUser = () => {
  const [registerForm, setRegisterForm] = useState();
  const [formValidation, setFormValidation] = useState(true);
  const [identicalPasswords, setIdenticalPasswords] = useState();
  const [emailValidate, setEmailValidate] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (!EmailRegex.test(value)) {
        setEmailValidate(false);
      } else {
        setEmailValidate(true);
        setRegisterForm({ ...registerForm, [name]: value });
      }
    } else {
      setRegisterForm({ ...registerForm, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerForm);
    try{
      const result = await createUserWithEmailAndPassword(
        auth,
        registerForm.email,
        registerForm.password
        )
        console.log(result);
        alert("Cadastrado com sucesso")
    }catch (error) {
      console.log(error);
      alert("Alguma coisa deu errado")
    }
  };

  const handleSamePasswords = (e) => {
    const samePasswords = e.target.value;
    console.log(samePasswords);
    if (samePasswords === registerForm.password) {
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
            <p className="error-mensage">
              {emailValidate === false
                ? "Insira um email valido (exemple@.com)"
                : ""}
            </p>

            <p>
              <label htmlFor="password_register">Senha: </label>
              <input
                id="password_register"
                name="password"
                required="required"
                type="password"
                placeholder="Senha"
                onChange={handleChange}
              />
            </p>

            <p>
              <label htmlFor="confirmPassword_register">Confirmar Senha: </label>
              <input
                id="confirmPassword_register"
                name="confirmPassword_register"
                required="required"
                type="password"
                placeholder="Confirme a Senha"
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
