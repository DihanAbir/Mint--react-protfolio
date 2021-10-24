import React, { useEffect, useState } from "react";
import "./toggle.css";
import { setTheme } from "./Themes.js";

const ToggleFunction = () => {
  const [togClass, setTogClass] = useState("light");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      {togClass === "light" ? (
        <div onClick={handleOnClick} className="wrg-toggle">
          <div className="wrg-toggle-container">
            <div className="wrg-toggle-check">
              <span>🌚</span>
            </div>
            <div className="wrg-toggle-uncheck">
              <span>😚</span>
            </div>
          </div>
          <div className="wrg-toggle-circle"></div>
          <input
            className="wrg-toggle-input"
            type="checkbox"
            aria-label="Toggle Button"
          />
        </div>
      ) : (
        <div onClick={handleOnClick} className="wrg-toggle">
          <div className="wrg-toggle-container"></div>
          <div className="wrg-toggle-circle"></div>
          <div className="wrg-toggle-uncheck">
            <span>🌚</span>
          </div>
          <div className="wrg-toggle-check">
            <span>😚</span>
          </div>

          <input
            className="wrg-toggle-input"
            type="checkbox"
            aria-label="Toggle Button"
          />
        </div>
      )}
      {/* <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label> */}
    </div>
  );
};

export default ToggleFunction;
