import React, { useState } from "react";
import Axios from "axios";

// LINKS
import { HOME_URL, SERVER_URL } from "../services/helper";

// ICONS
import fileIcon from "../assets/file.svg";
import buldIcon from "../assets/bulb.svg";
import logoutIcon from "../assets/logout.svg";

function Home() {
  const token = window.localStorage.getItem("snip_ninja_ext_token");
  const BASE_URL = "https://snippets-sever.onrender.com/";
  const ediorTip = "paste your code below";

  const [code, setCode] = useState("");

  function logUserOut() {
    console.log("clicked logout");
    window.localStorage.removeItem("snip_ninja_ext_token");
    window.location.reload();
  }

  function redirectToSnipNinjaPage() {
    const homePageUrl = HOME_URL;
    window.open(homePageUrl, "_blank");
  }

  function checkValidToken() {
    Axios.get(SERVER_URL + "/verify", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        let isValidToken = response.data.isVerified;
        if (isValidToken) {
          saveFile();
        } else {
          // show indirect token and ask to validate
          window.localStorage.removeItem("snip_ninja_ext_token");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("verify err", err);
      });
  }

  function saveFile() {
    if (code) {
      // save code
      console.log("valid code");
      const url = SERVER_URL + "/dashboard";
      Axios.post(url, {
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
    } else {
      console.log("empty");
    }
  }
  return (
    <>
      <div className="home-container">
        <div className="hm-inner-cont">
          <div className="home-top-container">
            <div
              className="brand emphasis-text link-item"
              onClick={redirectToSnipNinjaPage}
            >
              Snip Ninja
            </div>
            <div className="icon-bg">
              <img className="hm-icon" src={logoutIcon} onClick={logUserOut} />
            </div>
          </div>
          <div className="editor-container">
            <div className="editor-top-pane">
              <div className="window-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="tip-container">
                <img className="hm-icon" src={buldIcon} alt="tip icon" />
                <p className="tip">{ediorTip}</p>
              </div>
            </div>
            <div className="editor">
              <textarea
                className="editor-area"
                spellCheck="false"
                autoFocus="true"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>

            <div className="file-container">
              <div className="file-input-cont">
                <div className="left">
                  <img className="hm-icon" src={fileIcon} alt="file icon" />
                  <input
                    type="textx"
                    placeholder="enter file name"
                    className="file-input"
                  />
                </div>
                <div className="right">
                  <button className="file-btn" onClick={checkValidToken}>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
