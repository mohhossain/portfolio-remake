import React from "react";
import { Link } from "react-router-dom";

import { DiJavascript1 } from "react-icons/di";
import { VscInfo, VscJson } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaReact } from "react-icons/fa";

function ExploreLink({ title, setPage }) {
  let linkTo = "/";
  if (title === "About.md") {
    linkTo = "/about";
  } else if (title === "Projects.js") {
    linkTo = "/projects";
  } else if (title === "Blogs.py") {
    linkTo = "/blogs";
  } else if (title === "Github.js") {
    linkTo = "/github";
  } else if (title === "Photos.rb") {
    linkTo = "/photos";
  } else {
    linkTo = "/contact";
  }
  return (
    <div className="exp">
      <Link to={linkTo} className="exp-link" style={{ textDecoration: "none" }}>
        <p id="link">
          <span>
            {title === "About.md" ? (
              <VscInfo
                style={{ color: "#3597e3" }}
                className="js-icon"
              ></VscInfo>
            ) : title === "Contact.json" ? (
              <VscJson className="js-icon"></VscJson>
            ) : title === "Blogs.py" ? (
              <FaPython
                style={{ marginTop: "0px" }}
                className="py-icon"
              ></FaPython>
            ) : title === "Photos.rb" ? (
              <DiRuby style={{ marginTop: "0px" }} className="rb-icon"></DiRuby>
            ) : title === "Github.jsx" ? (
              <FaReact
                style={{ marginTop: "0px" }}
                className="react-icon"
              ></FaReact>
            ) : (
              <DiJavascript1
                style={{ marginTop: "0px" }}
                className="js-icon"
              ></DiJavascript1>
            )}
          </span>

          <span style={{ marginBottom: "2px" }}>{title}</span>
        </p>
      </Link>
    </div>
  );
}

export default ExploreLink;
