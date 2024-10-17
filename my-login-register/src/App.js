import { React, useState } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState();

  const handleLoginClick = () => {
    setShowLogin(true);
    console.log("tıklandı");
  };
  const handleCloseClick = () => {
    setShowLogin(false);
    console.log("tıklandı");
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
      {showLogin && (
        <div className="container">
          <div className="close-icon" onClick={handleCloseClick}>
            <div class="multiply"></div>
          </div>
          <div className="loginText">Login</div>
          <div className="input-container">
            <input type="text" placeholder="Email" required></input>

            <input type="password" placeholder="Password" required></input>
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
            <a>Register </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
