import React from "react";
import { Link } from "react-router-dom";

import { DiJavascript1 } from "react-icons/di";
import { VscInfo, VscJson } from "react-icons/vsc";

function ExploreLink({ title }) {
  let linkTo = "/";
  if (title === "About.md") {
    linkTo = "/about";
  } else if (title === "Projects.js") {
    linkTo = "/projects";
  } else if (title === "Github.js") {
    linkTo = "/github";
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
