import "./RegisterUser.css";
import { useContext, useState } from "react";
import { EmailRegex } from "../../Services/RegexValidator/RegexValidator";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../Services/Firebase/Firebase.js";
import { NotificationContext } from "../../contexts/Notifications/NotificationProvider";

export const RegisterUser = () => {
  const [registerForm, setRegisterForm] = useState();
  const [formValidation, setFormValidation] = useState(true);
  const [identicalPasswords, setIdenticalPasswords] = useState();
  const [emailValidate, setEmailValidate] = useState();
  const dispatch = useContext(NotificationContext);

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
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        registerForm.email,
        registerForm.password
      );
      //Dispatch é um context que uso para chamar notificação
      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: 1,
          type: "SUCCESS",
          message: `O email: ${result.user.email} foi cadastrado com sucesso`,
        },
      });
    } catch (error) {
      //Dispatch é um context que uso para chamar notificação

      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: 1,
          type: "ERROR",
          message: `Nao foi possivel cadastrar: ( ${error} `,
        },
      });
    }
  };

  const handleSamePasswords = (e) => {
    const samePasswords = e.target.value;
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
            <p className="form-container">
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

            <p className="form-container">
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

            <p className="form-container">
              <label htmlFor="confirmPassword_register">
                Confirmar Senha:{" "}
              </label>
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
