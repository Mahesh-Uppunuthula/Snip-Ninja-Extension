import React, { useEffect, useState } from "react";
import emailIcon from "../assets/email.svg";
import passwordlIcon from "../assets/lock.svg";
import { HOME_URL, SERVER_URL } from "../services/helper";
import Axios from "axios";

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  function loginUser(e) {
    e.preventDefault();
    
    Axios.post(SERVER_URL + "/login", userCredentials)
      .then((response) => {
        const responseToken = response.data.token;
        const responseMsg = response.data.message;

        if (responseToken) {
          window.localStorage.setItem("snip_ninja_ext_token", responseToken);
          window.location.reload();
        } else if (responseMsg) {
          /**
           * show username or password incorrect error.
           */
        }
      })
      .catch((err) => {
        /**
         * show error message
         */
      });
  }

  function redirectToSnipNinjaPage() {
    const homePageUrl = HOME_URL;
    window.open(homePageUrl, "_blank");
  }

  return (
    <>
      <div className="login-container">
        <div className="lg-inner-cont">
          <form>
            <div
              className="brand emphasis-text link-item"
              onClick={redirectToSnipNinjaPage}
            >
              Snip Ninja
            </div>
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
                    setUserCredentials({
                      ...userCredentials,
                      email: e.target.value,
                    });
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
                    setUserCredentials({
                      ...userCredentials,
                      password: e.target.value,
                    });
                  }}
                />
              </div>

              <button
                onClick={(e) => {
                  loginUser(e);
                }}
              >
                Log In
              </button>

              <div className="helper-text">
                <p>
                  Not a member?
                  <span
                    className="authRedirectLink link-item"
                    onClick={redirectToSnipNinjaPage}
                  >
                    Sign Up
                  </span>
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
