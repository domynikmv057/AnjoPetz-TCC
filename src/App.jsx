import "./reset.css";
import "./General.css";
import { ConfigRoutes } from "./Config/Route/ConfigRoutes";
import { HeaderNav } from "./Components/HeaderNav/HeaderNav";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <ConfigRoutes />
    </div>
  );
}

export default App;
