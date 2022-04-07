import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import AuthContext from "../../contexts/Auth/Auth";
import { NotificationContext } from "../../contexts/Notifications/NotificationProvider";
import { auth } from "../../Services/Firebase/Firebase";
import { LocalStorageSaveToken } from "../../Services/LocalStorage/LocalStorage";
import { EmailRegex } from "../../Services/RegexValidator/RegexValidator";
import "./Login.css";

export const Login = () => {
  const context = useContext(AuthContext);
  const [emailValidate, setEmailValidate] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useContext(NotificationContext);

  const contextTest = async () => {
    console.log(context);

    context.setUser(" EU CONSEGUI ");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (!EmailRegex.test(value)) {
        setEmailValidate(false);
      } else {
        setEmailValidate(true);
        setEmail({ [name]: value });
      }
    } else {
      setPassword({ [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.password || !email.email) {
      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: 1,
          type: "Error",
          message: `parece que algum campo esta vazio`,
        },
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.email,
        password.password
      );
      console.log(result);
      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: 1,
          type: "SUCCESS",
          message: `Bem vindo ${result.user.email}`,
        },
      });
      console.log(result._tokenResponse.idToken);
      LocalStorageSaveToken(result._tokenResponse.idToken);

      context.setAuthUser(true);
      console.log(context);
    } catch (error) {
      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: 1,
          type: "Error",
          message: `Algo deu errado: (${error})`,
        },
      });
    }
  };

  return (
    <section className="main-login-container">
      <form id="loginForm">
        <div className="title-style">
          <h1>Login</h1>
        </div>
        <fieldset>
          <legend>Dados de login</legend>
          <section className="input-container">
            <p className="form-container">
              <label htmlFor="email_login">Email: </label>
              <input
                onChange={handleChange}
                id="email_login"
                name="email"
                required="required"
                type="email"
                placeholder="exemple@gmail.com"
              />
            </p>
            <p className="error-mensage">
              {emailValidate === false
                ? "Insira um email valido (exemple@.com)"
                : ""}
            </p>

            <p className="form-container">
              <label htmlFor="senha_login">Senha: </label>
              <input
                onChange={handleChange}
                id="senha_login"
                name="password"
                required="required"
                type="password"
                placeholder="1234"
              />
            </p>
            <div className="btn-login">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn-primary"
              >
                Entrar
              </button>
            </div>
          </section>
        </fieldset>
      </form>
    </section>
  );
};
