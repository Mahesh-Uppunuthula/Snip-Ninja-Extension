import React, { useEffect, useState } from "react";

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const signUpRedirectLink = "https://snip-ninja.netlify.app/register";
  function loginUser() {}
  function redirectUserToSnippetsRegisterPage() {
    // chrome.tabs.create({ url: "https://snip-ninja.netlify.app/" });
  }

  // let [textSelected, setSelectedText] = useState("");

  // useEffect(()=>{
  //   document.onmouseup =
  //   document.onkeyup =
  //   document.onselectionchange =
  //     function () {
  //       let text = getSelectionText();
  //       setSelectedText(text);
  //       console.log("selected text ", text);
  //     };
  // }, [textSelected]);

  // function getSelectionText() {
  //   var text = "";
  //   if (window.getSelection) {
  //     text = window.getSelection().toString();
  //   } else if (document.selection && document.selection.type !== "Control") {
  //     text = document.selection.createRange().text;
  //   }
  //   return text;
  // }


  return (
    <>
      <div className="container">
        <div className="auth">
          <div className="auth-container">
            <form onSubmit={loginUser}>
              <h1 auth-label>Sign In</h1>
              <p className="motive-text">Log in to continue</p>
              <div className="form-container">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="example@email.com"
                  value={userCredentials.email}
                  onChange={(e) => {
                    setUserCredentials({ email: e.target.value });
                  }}
                />

                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  required
                  autoComplete="off"
                  placeholder="password goes here..."
                  value={userCredentials.password}
                  onChange={(e) => {
                    setUserCredentials({ password: e.target.value });
                  }}
                />

                <button>Log In</button>

                <div className="helper-text">
                  <p>
                    Not a member?{" "}
                    <a
                      className="authRedirectLink"
                      href={signUpRedirectLink}
                      // onClick={redirectUserToSnippetsRegisterPage}
                    >
                      sign Up
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
