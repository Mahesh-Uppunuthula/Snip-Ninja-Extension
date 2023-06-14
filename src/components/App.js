import Home from "../pages/Home";
import Login from "../pages/Login";

function App() {
  const token = window.localStorage.getItem("snip_ninja_ext_token");
  console.log("token home", token);

  return (
  <div className="main-container">{token ? <Home /> : <Login />}</div>);
}

export default App;
