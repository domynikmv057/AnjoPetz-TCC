import "./Register.css";
import { Login } from "../../Components/Login/Login";
import { useState } from "react";
import { RegisterUser } from "../../Components/RegisterUser/RegisterUser";

export const Register = () => {
  const [loginValue, setLoginValue] = useState(0);

  return (
    <section className="register-container">
      <section className="btn-register-container">
        <button
          className={loginValue === 0 ? "btn-active" : "btn-normal"}
          onClick={() => setLoginValue(0)}
        >
          Login
        </button>
        <button
          className={loginValue === 1 ? "btn-active" : "btn-normal"}
          onClick={() => setLoginValue(1)}
        >
          Cadastrar
        </button>
      </section>
      <section>{loginValue === 0 ? <Login /> : <RegisterUser />}</section>
    </section>
  );
};
