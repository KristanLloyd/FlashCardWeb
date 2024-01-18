import React from "react";
import logo from "../src/components/assets/logo.png";
import welcomePic from "../src/components/assets/welcomePic.png";
import "./App.css";

function App() {
  return (
    <div className="div">
      <img loading="lazy" srcSet={logo} className="web_logo" />
      <div className="div-2">
        <div className="div-3">
          <div className="column">
            <div className="slogan">
              <span className="slogan_txt">
                Flash Forward, Learn Faster: Your Knowledge, Your Cards!
              </span>
            </div>
            <span className="span">Get Started</span>
          </div>
          <div className="column-2">
            <div className="div-4">
              <img loading="lazy" srcSet={welcomePic} className="welcomePic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
