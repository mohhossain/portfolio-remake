import { useState } from "react";
import "./App.css";
// import { Sidebar } from "react-pro-sidebar";
// import SidebarMenu from "./Sidebar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscFiles, VscAccount } from "react-icons/vsc";
import Explorer from "./Explorer";
import About from "./About";
import Tooltip from "./Tooltip";
import TopNav from "./TopNav";

function App() {
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);
  const [isGithubClicked, setIsGithubClicked] = useState(false);

  const navigate = useNavigate();

  const [page, setPage] = useState("Home.js");

  return (
    <div className="App">
      <div className="titlebar">
        <p>{page} — Mohammad Hossain</p>
      </div>
      {/* <SidebarMenu></SidebarMenu> */}
      <div className="nav-explorer">
        <nav className="sidebar">
          <Link to="/projects" className="link">
            <button
              onClick={() => {
                setPage("Projects.js");
                setIsAboutClicked(false);
                setIsProjectsClicked(true);
                setIsGithubClicked(false);
              }}
              className={isProjectsClicked ? "activemenuitems" : "menuitems"}
            >
              <VscFiles className="icons" />
            </button>
          </Link>
          <Link to="/github" className="link">
            <button
              onClick={() => {
                setPage("Github.md");
                setIsAboutClicked(false);
                setIsProjectsClicked(false);
                setIsGithubClicked(true);
              }}
              className={isGithubClicked ? "activemenuitems" : "menuitems"}
            >
              <FaGithub className="icons" />
            </button>
          </Link>

          <Link to="/about" className="link">
            <button
              onClick={() => {
                setPage("About.md");
                setIsAboutClicked(true);
                setIsProjectsClicked(false);
                setIsGithubClicked(false);
                navigate.to("https://github.com/mohhossain");
              }}
              className={isAboutClicked ? "activemenuitems" : "menuitems"}
            >
              <VscAccount className="icons" />
            </button>
          </Link>
        </nav>
        <Explorer></Explorer>
        <div style={{ width: "100vw" }}>
          <div className="wrapper">
            <TopNav></TopNav>
          </div>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="about" element={<About setPage={setPage}></About>} />
            <Route path="github" element={<h1></h1>} />
            <Route path="projects" element={<></>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
