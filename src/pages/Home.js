import React from "react";
import Axios from "axios";

// LINKS
import { HOME_URL, BASE_URL } from "../services/helper";

// EDITOR
import { Editor } from "@monaco-editor/react";

// ICONS
import fileIcon from "../assets/file.svg";
import buldIcon from "../assets/bulb.svg";
import logoutIcon from "../assets/logout.svg";

function Home() {
  const token = window.localStorage.getItem("token");

  const BASE_URL = "https://snippets-sever.onrender.com/";

  const options = {
    autoIndent: "full",
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 3,
      verticalSliderSize: 3,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  let ediorTip = "paste your code below";

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

  function logUserOut() {
    console.log("clicked logout");
    window.localStorage.removeItem("token");
  }

  function handleOnCodeChange(value, event) {}

  function redirectToSnipNinjaPage() {
    const homePageUrl = HOME_URL;
    window.open(homePageUrl, "_blank");
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
              <img className="hm-icon" src={logoutIcon} />
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
            {/* <Editor
              className="editor"
              width="100%"
              height="300px"
              defaultValue={"//this is a comment"}
              // defaultLanguage="typescript && javascript && css && less && scss && json && html"
              defaultLanguage="javascript"
              theme="vs-dark"
              options={options}
              onChange={(value, event) => {
                handleOnCodeChange(value, event);
              }}
            /> */}
            <div className="editor">
              <textarea className="editor-area" spellCheck="false" autoFocus="true"/>
            </div>

            <div className="file-container">
              <div className="file-input-cont">
                <div className="left">
                  <img className="hm-icon" src={fileIcon} alt="file icon" />
                  <input type="textx" placeholder="enter file name" className="file-input" />
                </div>
                <div className="right">
                  <button className="file-btn">save</button>
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
