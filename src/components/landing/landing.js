import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import Fade from "react-reveal/Fade";
import img1 from "../../img/undraw_online_articles_re_yrkjd.svg";
function Landing({ theme, system }) {
  const navegate = useNavigate();
  const goArticle = () => {
    navegate("/article");
  };
  return (
    <>
      <div className={`land ${theme === "light" ? "light" : ""}`}>
        <div className="img">
          <img src={img1} alt="mage" />
        </div>
        <Fade up cascade>
          <div className="info">
            <h2>{system.landing.introduction[0]}</h2>
            <h2>{system.landing.introduction[1]}</h2>
            <h3>{system.landing.introduction[2]} </h3>
            <h3>
              {system.landing.introduction[3]}
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </h3>

            <button onClick={goArticle}>
              {system.landing.buttonname}{" "}
              <i className="fa-solid fa-pen-clip"></i>
            </button>
            {/* <div className="social">
            <ul>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
              <li>
                <i className="fa-brands fa-behance"></i>
              </li>
            </ul>
          </div> */}
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Landing;
