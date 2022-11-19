import React from "react";
import "./toggle.css";
function Toggle({ settheme, theme }) {
  const handleDark = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      settheme("light");
    } else {
      localStorage.theme = "dark";
      settheme("dark");
    }
  };
  return (
    <>
      <label>
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          checked={theme === "light" ? true : false}
          onChange={handleDark}
        />
        <div className="toggle-switch"></div>
      </label>
    </>
  );
}

export default Toggle;
