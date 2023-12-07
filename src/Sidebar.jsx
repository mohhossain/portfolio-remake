import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { VscFiles, VscAccount } from "react-icons/vsc";

function SidebarMenu() {
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);
  const [isGithubClicked, setIsGithubClicked] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);

  const navigate = useNavigate();

  const [page, setPage] = useState("About.md");

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <nav className="sidebar">
        <Link to="/projects" className="link">
          <button
            onClick={() => {
              setPage("Projects.js");
              setIsAboutClicked(false);
              setIsContactClicked(false);
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
              setIsContactClicked(false);
              setIsGithubClicked(true);
            }}
            className={isGithubClicked ? "activemenuitems" : "menuitems"}
          >
            <FaGithub className="icons" />
          </button>
        </Link>

        <Link to="/contact" className="link">
          <button
            onClick={() => {
              setPage("Contact.json");
              setIsAboutClicked(false);
              setIsProjectsClicked(false);
              setIsGithubClicked(false);
              setIsContactClicked(true);
            }}
            className={isContactClicked ? "activemenuitems" : "menuitems"}
          >
            <MdOutlineEmail className="icons" />
          </button>
        </Link>

        <Link to="/about" className="link">
          <button
            onClick={() => {
              setPage("About.md");
              setIsAboutClicked(true);
              setIsProjectsClicked(false);
              setIsContactClicked(false);
              setIsGithubClicked(false);
              navigate("/https://github.com/mohhossain");
            }}
            className={isAboutClicked ? "activemenuitems" : "menuitems"}
          >
            <VscAccount className="icons" />
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default SidebarMenu;
