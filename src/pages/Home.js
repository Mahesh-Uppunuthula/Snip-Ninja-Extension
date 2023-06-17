import React, { useEffect, useState } from "react";
import Axios from "axios";

// LINKS
import { HOME_URL, SERVER_URL } from "../services/helper";

// ICONS
import fileIcon from "../assets/file.svg";
import buldIcon from "../assets/bulb.svg";
import logoutIcon from "../assets/logout.svg";

function Home() {
  const ediorTip = "paste your code below";
  const token = window.localStorage.getItem("snip_ninja_ext_token");

  const [fileName, setFileName] = useState("");
  const [code, setCode] = useState("");
  const [isSaveClicked, setSaveClicked] = useState(0);
  const [folder, setFolder] = useState();

  useEffect(() => {
    Axios.get(SERVER_URL + "/extension", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setFolder(response.data.response[0]);
      })
      .catch((err) => {
        console.log("fav folder err", err);
      });
  }, []);

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
      setSaveClicked((prev)=>{return prev + 1});
      /**
       * monitoring use clicks to not save multiple times
       * */ 
      if (isSaveClicked === 1) {
        /**
         * save code
         * show progress bar
         */
        const url = SERVER_URL + "/editor";
        const payload = {
          title: fileName,
          content: code,
          folderId: folder._id,
          folderName: folder.name,
        };
        Axios.post(url, payload, {
          headers: {
            Authorization: token,
          },
        })
          .then((response) => {
            /**
             * show message
             */
            const msg = response.data.message;
            setCode("");
            setFileName("");
            setSaveClicked(0);
          })
          .catch((err) => {
            console.log("save err", err);
          });
      }
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
                    type="text"
                    placeholder="enter file name"
                    className="file-input"
                    value={fileName}
                    onChange={(e) => {
                      setFileName(e.target.value);
                    }}
                  />
                </div>
                <div className="right">
                  {<button  
                    style={{backgroundColor: (isSaveClicked > 0) && "grey"}}
                    className="file-btn" 
                    onClick={checkValidToken}>
                    save
                  </button>}
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
