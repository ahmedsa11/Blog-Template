import React, { useEffect } from "react";
import Footer from "../footer/footer";
// import '../styleRead/prism.css'
// import '../styleRead/prism-line-numbers.css'
import Navbar from "../navbar/navbar";
// import '../styleRead/style.css'
import "./layout.css";
function Layout({ children, theme, settheme, system }) {
  useEffect(() => {
    const pre = document.querySelectorAll("pre");
    const copyButtons = document.querySelectorAll(".copy-button");
    pre.forEach((block) => {
      const button = document.createElement("button");
      button.innerHTML = "copy";
      button.classList.add("copy-button");
      block.appendChild(button);
    });
    copyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        ("ccc");
        const code = button.parentElement.querySelector("code");
        const range = document.createRange();
        range.selectNode(code);
        window.getSelection().addRange(range);
        try {
          document.execCommand("copy");
          button.innerHTML = "copied";
          // button.classList.add('copied');
        } catch (err) {
          console.log("Oops, unable to copy");
        }
        setTimeout(() => {
          button.innerHTML = "copy";
          // button.classList.remove('copied');
        }, 2000);
        window.getSelection().removeAllRanges();
      });
    });
  }, []);
  return (
    <div className={`layout ${theme === "light" ? "light" : ""}`}>
      <Navbar theme={theme} settheme={settheme} system={system} />
      {children}

      <Footer theme={theme} settheme={settheme} system={system} />
    </div>
  );
}

export default Layout;
