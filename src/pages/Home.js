import React from "react";
import Axios from "axios";

function Home() {
  const token = window.localStorage.getItem("token");

  const BASE_URL = "https://snippets-sever.onrender.com/";

  function handleSubmit() {
    console.log("on click");
    const url = BASE_URL + "dashboard";
    console.log("token", token);
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

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzIzYzA2ZDljZWE2NTMxZTZkYTAwNyIsImVtYWlsIjoibUBtIiwiaWF0IjoxNjg1ODE1NTg3LCJleHAiOjE2ODU5MDE5ODd9.UAJMUhDypfiEpmhUJ4WzaYS6CUPDIvIOU1DijLJEi_8
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzIzYzA2ZDljZWE2NTMxZTZkYTAwNyIsImVtYWlsIjoibUBtIiwiaWF0IjoxNjg2MzIyMTk4LCJleHAiOjE2ODY0MDg1OTh9.qgQF8-_sguh6HQbnCz_IUK4c0ncaWmq-WY8e5AbxNOY
  return (
    <>
      <div className="container">
        <div className="home-container">
          <div id="home" className="brand emphasis-text link-item">
            Snip Ninja
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
