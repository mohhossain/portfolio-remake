import logo from "./logo.svg";
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

function App() {
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);
  const [isGithubClicked, setIsGithubClicked] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="titlebar">
        <p>About.js</p>
      </div>
      {/* <SidebarMenu></SidebarMenu> */}
      <div className="nav-explorer">
        <nav className="sidebar">
          <Link to="/projects" className="link">
            <button
              onClick={() => {
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
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="about" element={<About></About>} />
          <Route path="github" element={<h1></h1>} />
          <Route path="projects" element={<></>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
