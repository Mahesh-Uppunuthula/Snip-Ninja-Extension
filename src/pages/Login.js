import React, { useState } from "react";
import emailIcon from "../assets/email.svg";
import passwordlIcon from "../assets/lock.svg";

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const signUpRedirectLink = "";

  function loginUser() {}
  function redirectUserToSnippetsRegisterPage() {}

  return (
    <>
      <div className="login-container">
        <div className="lg-inner-cont">
          <form onSubmit={loginUser}>
            <div className="brand emphasis-text link-item">Snip Ninja</div>
            <h1 className="heading">Log In to continue</h1>
            <div className="form-container">
              <label htmlFor="Email">Email</label>
              <div className="input-cont">
                <img className="lg-icon" alt="email icon" src={emailIcon}></img>
                <input
                  className="lg-input"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="example@email.com"
                  value={userCredentials.email}
                  onChange={(e) => {
                    setUserCredentials({ email: e.target.value });
                  }}
                />
              </div>

              <label htmlFor="Password">Password</label>

              <div className="input-cont">
                <img
                  className="lg-icon"
                  alt="email icon"
                  src={passwordlIcon}
                ></img>
                <input
                  className="lg-input"
                  type="password"
                  required
                  autoComplete="off"
                  placeholder="password goes here..."
                  value={userCredentials.password}
                  onChange={(e) => {
                    setUserCredentials({ password: e.target.value });
                  }}
                />
              </div>

              <button>Log In</button>

              <div className="helper-text">
                <p>
                  Not a member?
                  <p
                    className="authRedirectLink link-item"
                    onClick={redirectUserToSnippetsRegisterPage}
                  >
                    Sign Up
                  </p>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
