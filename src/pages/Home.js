import React from "react";
import Axios from "axios";
import logoutIcon from "../assets/logout.svg";

function Home() {
  const token = window.localStorage.getItem("token");

  const BASE_URL = "https://snippets-sever.onrender.com/";

  function handleSubmit() {
    console.log("request to save file");
    const url = BASE_URL + "dashboard";
    
    Axios.get(url, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log("response ", response.data.folders);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function logUserOut(){
    console.log("clicked logout");
    window.localStorage.removeItem("token");
  }

  return (
    <>
      <div className="container">
        <div className="home-container">
          <div className="top-container">
            <div id="home" className="brand emphasis-text link-item">
              <a href="https://snip-ninja.netlify.app"></a>
            </div>
            <div className="img__wrap" onClick={logUserOut}>
              <img className="logout-icon" src={logoutIcon}></img>
              <p className="img-desc">logout</p>
            </div>
          </div>
          <div className="form">
            <div className="heading">
              Create a new snippet from highlighted code
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="file"
                placeholder="enter file name here.."
                autofocus="true"
              ></input>
            </div>
            <button className="btn" type="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
