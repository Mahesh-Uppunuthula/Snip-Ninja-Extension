import React from "react";
import Axios from "axios";

// EDITOR
import { Editor } from "@monaco-editor/react";

// ICONS
import logoutIcon from "../assets/logout.svg";

function Home() {
  const token = window.localStorage.getItem("token");

  const BASE_URL = "https://snippets-sever.onrender.com/";

  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
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
    cursorStyle: 'line',
    automaticLayout: true,
  }; 


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

  return (
    <>
      <div className="home-container">
        <Editor
          className="editor"
          width="300px"
          height="300px"
          defaultValue={"//this is a comment"}
          // defaultLanguage="typescript && javascript && css && less && scss && json && html"
          defaultLanguage="javascript"
          theme="vs-dark"
          options={options}
          onChange={(value, event) => {
            handleOnCodeChange(value, event);
          }}
        />
        {/* <div className="top-container">
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
          </div> */}
      </div>
    </>
  );
}

export default Home;
