import Home from "../pages/Home";
import Login from "../pages/Login";
function App() {
  const token = window.localStorage.getItem("token");
  console.log("token home", token);

  return <div className="App">{token ? <Home /> : <Login />}</div>;
}

export default App;
