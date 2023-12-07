import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ExploreLink from "./ExploreLink";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

function Explorer() {
  const [isClicked, setIsClicked] = useState(true);
  const links = [
    "About.md",
    "Projects.js",
    "Blogs.py",
    "Github.js",
    "Contact.json",
  ];

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="explorer">
      <p className="explorer-p">EXPLORER</p>

      <p className="portfolio explorer-p">
        {isClicked ? (
          <VscChevronDown
            onClick={handleClick}
            className="chev-icon"
            //   style={{ fontSize: "20px", verticalAlign: "bottom" }}
          ></VscChevronDown>
        ) : (
          <VscChevronRight
            onClick={handleClick}
            className="chev-icon"
            //   style={{ fontSize: "20px", verticalAlign: "bottom" }}
          ></VscChevronRight>
        )}
        PORTFOLIO
      </p>
      {isClicked ? (
        <div className="explorer-links">
          {links.map((link) => {
            return <ExploreLink title={link} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Explorer;
