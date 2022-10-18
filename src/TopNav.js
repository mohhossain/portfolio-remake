import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function TopNav() {
  return (
    <div className="topnav">
      <Link className="topnav-link" to="/about">
        About.md
      </Link>
      <Link className="topnav-link" to="/projects">
        Projects.js
      </Link>
      <Link className="topnav-link" to="/github">
        Github.js
      </Link>
      <Link className="topnav-link" to="/contact">
        Contact.json
      </Link>
    </div>
  );
}

export default TopNav;
