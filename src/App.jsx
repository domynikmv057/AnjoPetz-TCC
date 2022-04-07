import "./reset.css";
import "./General.css";
import { ConfigRoutes } from "./Config/Route/ConfigRoutes";
import { HeaderNav } from "./Components/HeaderNav/HeaderNav";
import { AuthProvider } from "./contexts/Auth/Auth";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <AuthProvider>
        <ConfigRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
