import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function TopNav() {
  const [activeTabs, setActiveTabs] = useState({
    about: true,
    projects: false,
    github: false,
    contact: false,
  });
  return (
    <div className="topnav">
      <Link
        onClick={() => {
          setActiveTabs({
            about: true,
            projects: false,
            github: false,
            contact: false,
          });
        }}
        className={activeTabs.about ? "topnav-link active-tab" : "topnav-link"}
        to="/about"
        style={{ borderLeft: "0px" }}
      >
        About.md
      </Link>
      <Link
        onClick={() => {
          setActiveTabs({
            about: false,
            projects: true,
            github: false,
            contact: false,
          });
        }}
        className={
          activeTabs.projects ? "topnav-link active-tab" : "topnav-link"
        }
        to="/projects"
      >
        Projects.js
      </Link>
      <Link
        onClick={() => {
          setActiveTabs({
            about: false,
            projects: false,
            github: true,
            contact: false,
          });
        }}
        className={activeTabs.github ? "topnav-link active-tab" : "topnav-link"}
        to="/github"
      >
        Github.js
      </Link>
      <Link
        onClick={() => {
          setActiveTabs({
            about: false,
            projects: false,
            github: false,
            contact: true,
          });
        }}
        className={
          activeTabs.contact ? "topnav-link active-tab" : "topnav-link"
        }
        to="/contact"
        style={{ borderRight: "none" }}
      >
        Contact.json
      </Link>
    </div>
  );
}

export default TopNav;
