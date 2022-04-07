import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    token: "",
  });
  const authUser = localStorage.getItem("Token") || false;

  //   useEffect(() => {
  //     const token = localStorage.getItem("Token") || false;
  //     console.log(token);

  //     if (token !== false) {
  //       setAuthUser(true);
  //     } else {
  //       setAuthUser(false);
  //     }
  //   }, []);

  const Loguin = () => {
    const response = { email: "1234@gmail.com", password: "1234" };

    return response;
  };

  return (
    <AuthContext.Provider value={{ signed: true, user, setUser, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
