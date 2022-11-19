import React, { useEffect, useState } from "react";
import "./articles.css";
import Carda from "./carda/carda";
import articles from "../../database/articles.json";
import Loader from "../loader/loader";
function Articles({ theme, system }, props) {
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const set = new Set();
    //eslint-disable-next-line
    articles.map((d) => {
      set.add(d.category);
    });
    const Cat = Array.from(set);
    setCategories(Cat);
    setLoad(false);
  }, []);
  return (
    <>
      {load ? <Loader /> : null}
      <div className={`intro ${theme === "light" ? "light" : ""}`}>
        <h1>
          المقالات <i className="fa-solid fa-book-open"></i>
        </h1>
        <p>{system.articles.introarticles}</p>
      </div>
      <div className={`fhrs ${theme === "light" ? "light" : ""}`}>
        <h1>
          الفهرس <i className="fa-solid fa-indent"></i>
        </h1>
        <ul>
          {categories
            ? categories.map((a) => {
                return (
                  <li>
                    <a href={`#${a}`}>
                      {a} <i className="fas fa-chevron-left"></i>
                    </a>
                  </li>
                );
              })
            : "notfound"}
        </ul>
      </div>
      <div className={`numberr ${theme === "light" ? "light" : ""}`}>
        <h2>
          عدد المقالات : <i className="fa-solid fa-hashtag"></i>{" "}
          {articles.length}
        </h2>
      </div>
      <Carda theme={theme} props={props} />
    </>
  );
}

export default Articles;
