import axios from "axios";
import { useState } from "react";

export const Main = () => {
  const [test, setTest] = useState([]);

  const teste = () => {
    axios
      .post("https://anjopetzs-default-rtdb.firebaseio.com/Clientes.json", {
        Name: "Spider",
        Sobrenome: "Man",
      })
      .then((resp) => {
        console.log(resp);
      });
  };

  const teste2 = () => {
    console.log(test);

    axios
      .get("https://anjopetzs-default-rtdb.firebaseio.com/Clientes.json")
      .then((resp) => {
        console.log(resp);
        setTest(resp.data);
      });

    console.log(test);
  };

  const teste3 = () => {};

  const teste4 = () => {
    axios.delete("https://anjopetzs-default-rtdb.firebaseio.com/Clientes.json");
  };

  return (
    <>
      <h1> Home</h1>
      <button onClick={teste}> Post</button>
      <button onClick={teste2}> Get</button>
      <button onClick={teste3}> Put</button>
      <button onClick={teste4}> Delet</button>
    </>
  );
};
