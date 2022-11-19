import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../toggle/toggle";
import "./navbar.css";
function Navbar({ theme, settheme, system }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const writeHijri = () =>
    new Date().toLocaleString("ar-u-ca-islamic", options);
  const writeMiladi = () => new Date().toLocaleString("ar", options) + " م";
  const navegate = useNavigate();
  const goArticle = () => {
    navegate("/article");
  };
  const goHome = () => {
    navegate("/");
  };
  const activeLink = () => {
    const link = document.querySelectorAll(".article div span");
    link.forEach((act) => {
      act.addEventListener("click", function () {
        link.forEach((btn) => btn.classList.remove("activelink"));
        this.classList.add("activelink");
      });
    });
  };
  useEffect(() => {
    activeLink();
  }, []);
  return (
    <div className={`navbar ${theme === "light" ? "light" : ""}`}>
      <div className="date">
        <h3>{writeHijri()}</h3>
        <h3>{system.navbar.title}</h3>
        <h3>{writeMiladi()}</h3>
      </div>
      <div className="content">
        <div className="logo" onClick={goHome}>
          {system.navbar.logo}
        </div>
        <div className="article">
          <div className="activelink" onClick={goArticle}>
            <span>{system.navbar.iconname} </span>
            <i className="fa-solid fa-book-open"></i>
          </div>
          <Toggle theme={theme} settheme={settheme} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
