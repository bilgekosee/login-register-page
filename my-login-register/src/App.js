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
            <input></input>

            <input></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
