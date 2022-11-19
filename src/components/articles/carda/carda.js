import React, { useEffect, useState } from "react";
import "./carda.css";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import articles from "../../../database/articles.json";
function Carda({ theme }, props) {
  const [categories, setCategories] = useState([]);
  const navegate = useNavigate();
  useEffect(() => {
    const set = new Set();
    // eslint-disable-next-line
    articles.map((d) => {
      set.add(d.category);
    });
    const Cat = Array.from(set);
    setCategories(Cat);
  }, []);
  const mapCategoriesToProducts = () => {
    return categories.map((cat) => {
      return (
        <div id={cat}>
          <h1>{cat}</h1>
          <div className="cards">
            {
              // eslint-disable-next-line
              articles.map((d) => {
                if (d.category === cat) {
                  return (
                    <Zoom>
                      <div className="card">
                        <h2 className="title">{d.title}</h2>
                        <p className="text">{d.description}</p>
                        <button
                          onClick={() => {
                            navegate(`/readarticles/${d.slug}`);
                          }}
                        >
                          قراءة المقال
                        </button>
                      </div>
                    </Zoom>
                  );
                }
              })
            }
          </div>
        </div>
      );
    });
  };
  return (
    <div className={`maintitle ${theme === "light" ? "light" : ""}`}>
      {mapCategoriesToProducts()}
    </div>
  );
}

export default Carda;
