import React from "react";
import "./footer.css";
function Footer({ theme, system }) {
  return (
    <div>
      <div className={`footer ${theme === "light" ? "light" : ""}`}>
        <div className="priv">
          <span>{system.footer.copyright} </span> {system.footer.name}
        </div>
        <div className="social">
          <ul>
            <li>
              <a href={system.footer.social.twitter} target="blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={system.footer.social.linkedin} target="blank">
                {" "}
                <i className="fa-brands fa-linkedin"></i>{" "}
              </a>
            </li>
            <li>
              <a href={system.footer.social.github} target="blank">
                {" "}
                <i className="fa-brands fa-github"></i>{" "}
              </a>
            </li>
            <li>
              <a href={system.footer.social.behance} target="blank">
                {" "}
                <i className="fa-brands fa-behance"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className={`salama ${theme === "light" ? "light" : ""}`}>
     Built with {theme === "light" ? "🖤" : "🤍"} By    <a style={{color:'#fff',    textDecoration: 'none'}} href="https://www.linkedin.com/in/ahmed-salama-a18b48200"target='blank'>Ahmed Salama</a>
      </span>
    </div>
  );
}

export default Footer;
