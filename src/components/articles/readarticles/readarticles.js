import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articles from "../../../database/articles.json";
import "./readarticles.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "./prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import Loader from "../../loader/loader";
function ReadArticles({ theme }) {
  const params = useParams();
  const [post, setPost] = useState();
  const [path, setPath] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);
  useEffect(() => {
    const ari = articles.filter((ar) => ar.slug === params.slug);
    setPath(ari.map((r) => r.path).join());
  }, [params.slug]);
  useEffect(() => {
    if (typeof path === "string") { 
      import(`../../../${path.slice(5)}`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => {
              setPost(res);
              setLoad(false);
            })
            .catch((err) => {
              console.log(err);
              setLoad(false);
            });
        })
        .catch((ee) => {
          console.log(ee);
          setLoad(false);
        });
    }
  }, [path]);
  useEffect(() => {
    // add copy button to all pre code blocks
    const pre = document.querySelectorAll("pre");
    pre.forEach((block) => {
      const button = document.createElement("button");
      button.innerHTML = '<i class="fa fa-solid fa-clipboard"></i>';
      button.classList.add("copy-button");
      block.appendChild(button);
    });
    // copy code blocks
    const copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const code = button.parentElement.querySelector("code");
        const range = document.createRange();
        range.selectNode(code);
        window.getSelection().addRange(range);
        try {
          document.execCommand("copy");
          button.innerHTML = '<i class="fa fa-solid fa-clipboard-check"></i>';
          // button.classList.add('copied');
        } catch (err) {
          console.log("Oops, unable to copy");
        }
        setTimeout(() => {
          button.innerHTML = '<i class="fa fa-solid fa-clipboard"></i>';
          // button.classList.remove('copied');
        }, 1000);
        window.getSelection().removeAllRanges();
      });
    });
  }, [post]);
  return (
    <>
      {load ? <Loader /> : load}
      {!load ? (
        <h1 className={`tit ${theme === "light" ? "light" : ""}`}>
          السلام عليكم ورحمة الله وبركاته
        </h1>
      ) : null}
      <div className={`mmm ${theme === "light" ? "light" : ""}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} children={post} />
      </div>
    </>
  );
}
export default ReadArticles;
