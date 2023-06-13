import React, { useState } from "react";

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
      <div className="container">
        <div className="auth">
          <div className="auth-container">
            <form onSubmit={loginUser}>
              <div id="home" className="brand emphasis-text link-item">
                Snip Ninja
              </div>
              <p className="motive-text">Log In to continue</p>
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
                    Not a member?
                    <p
                      className="authRedirectLink"
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
      </div>
    </>
  );
}

export default Login;
