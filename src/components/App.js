import Home from "../pages/Home";
import Login from "../pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const token = window.localStorage.getItem("token");
  console.log("token home", token);

  return (
  <div className="App">{token ? <Home /> : <Login />}</div>);
}

export default App;
