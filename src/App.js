import React, { useEffect, useState } from "react";
import "./css/App.css";
// import { Sidebar } from "react-pro-sidebar";
// import SidebarMenu from "./Sidebar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscFiles, VscAccount } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

import Explorer from "./Explorer";
import TopNav from "./TopNav";
import Product from "./components/Product";
import Github from "./components/Github";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Blogs from "./components/Blogs";
import Sidebar from "./Sidebar";
function App() {
  const [page, setPage] = useState("About.md");

  useEffect(() => {
    fetch(`https://portfolio-backend-mbat.onrender.com/greet`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <div className="App">
      <div className="titlebar">
        <p>{page} — Mohammad Hossain</p>
      </div>
      {/* <SidebarMenu></SidebarMenu> */}
      <div className="nav-explorer">
        <Sidebar />
        <Explorer></Explorer>
        <div style={{ width: "100vw" }}>
          <div className="wrapper">
            <TopNav />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<About setPage={setPage}></About>} />
              <Route path="about" element={<About setPage={setPage}></About>} />
              <Route
                path="github"
                element={<Github setPage={setPage}></Github>}
              />
              <Route path="projects" element={<Product setPage={setPage} />} />
              <Route
                path="contact"
                element={<Contact setPage={setPage}></Contact>}
              />
              <Route path="blogs" element={<Blogs setPage={setPage} />} />
              {/* error route */}
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
