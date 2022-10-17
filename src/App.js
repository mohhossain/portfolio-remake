import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import { Sidebar } from "react-pro-sidebar";
// import SidebarMenu from "./Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscFiles, VscAccount } from "react-icons/vsc";

function App() {
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);
  const [isGithubClicked, setIsGithubClicked] = useState(false);

  return (
    <div className="App">
      {/* <SidebarMenu></SidebarMenu> */}
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
            }}
            className={isAboutClicked ? "activemenuitems" : "menuitems"}
          >
            <VscAccount className="icons" />
          </button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="about" element={<></>} />
        <Route path="github" element={<></>} />
        <Route path="projects" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
