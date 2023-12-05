import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { DiJavascript1 } from "react-icons/di";
import { VscInfo, VscJson } from "react-icons/vsc";

function TopNav() {
  const [activeTabs, setActiveTabs] = useState({
    about: true,
    blogs: false,
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
        <VscInfo style={{ color: "#3597e3" }} className="js-icon" />
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
        <DiJavascript1 className="js-icon" />
        Projects.js
      </Link>
      <Link className="topnav-link" to="/blogs">
        <DiJavascript1 className="js-icon" />
        Blogs.js
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
        <DiJavascript1 className="js-icon" />
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
        <VscJson className="js-icon" />
        Contact.json
      </Link>
    </div>
  );
}

export default TopNav;
