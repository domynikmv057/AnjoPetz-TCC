import { useContext } from "react";
import AuthContext from "../../contexts/Auth/Auth";

export const Main = () => {
  const UserContext = useContext(AuthContext);

  return (
    <>
      <h1>Hellow Main</h1>
    </>
  );
};
