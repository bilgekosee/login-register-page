import { React, useState } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(null);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLogin(true);
    console.log("tıklandı");
  };
  const handleCloseClick = () => {
    setShowLogin(null);
    console.log("tıklandı");
  };
  const handleRegisterClick = () => {
    setShowLogin(false);
  };
  return (
    <div className="all-container">
      <header className="header-container">
        <div className="logo">LOGO</div>
        <div className="header-wrapper">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <button className="login-container" onClick={handleLoginClick}>
          LOGIN
        </button>
      </header>
      {showLogin === true ? (
        <div className="container">
          <div className="close-icon" onClick={handleCloseClick}>
            <div class="multiply"></div>
          </div>
          <div className="loginText">Login</div>

          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              placeholder="Email"
              autoComplete="new-email"
              required
            ></input>
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
            ></input>
          </div>

          <div className="forget-container">
            <input type="checkbox" id="remember-checbox"></input>
            <div className="text-container">
              <span className="remember-span">Remember Me</span>
              <a className="forget-password">Forget Password?</a>
            </div>
          </div>
          <div className="login-button">
            <button type="button" className="loginButton">
              Login
            </button>
          </div>
          <div className="accounted-required">
            <a>Don’t have a accounted? </a>
            <a
              href="#register"
              className="none-underline"
              onClick={handleRegisterClick}
            >
              Register
            </a>
          </div>
        </div>
      ) : showLogin === false ? (
        <div className="container" id="register">
          <div className="close-icon" onClick={handleCloseClick}>
            <div class="multiply"></div>
          </div>
          <div className="loginText-Register">Registration</div>
          <div className="input-container">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Name"
              autoComplete="new-name"
              required
            ></input>
          </div>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              placeholder="Email"
              autoComplete="new-email"
              required
            ></input>
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
            ></input>
          </div>

          <div className="forget-containerRegister">
            <input type="checkbox" id="remember-checbox"></input>
            <div className="text-container">
              <span className="remember-spanRegister">
                I agree to the terms & conditions
              </span>
            </div>
          </div>
          <div className="login-button">
            <button type="button" className="loginButton">
              Register
            </button>
          </div>
          <div className="accounted-required-register">
            <a>Already have an account? </a>
            <a href="" className="none-underline" onClick={handleLoginClick}>
              Login
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
