import React, { useState } from "react";
import "./App.css";
import { Routes, Route,Navigate  } from "react-router-dom";
import Landing from "./components/landing/landing";
import Layout from "./components/layout/layout";
import Articles from "./components/articles/articles";
import system from "./system/system";
import Notfound from "./components/notfound/notfound";
import ReadArticles from "./components/articles/readarticles/readarticles";
function App() {
  const [theme, settheme] = useState(localStorage.theme);
  return (
    <>
      <Layout theme={theme} settheme={settheme} system={system}>
        <Routes>
     
          <Route path="/" element={<Landing theme={theme} system={system} />} />
          <Route
            path="article"
            element={<Articles theme={theme} system={system} />}
          />
          <Route
            path="readarticles/:slug"
            element={<ReadArticles theme={theme} system={system} />}
          />
          <Route path="404"  element={<Notfound theme={theme} />} />
          <Route path="*"  element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
