import React from "react";
import BlinkingCursor from "./BlinkingCursor";
import Portrait from "./assets/portrait.png";

function About({ setPage }) {
  setPage("About.js");
  return (
    <div className="About">
      <h1>Hello, World!</h1>
      <img src={Portrait} height={400} ></img>
      <BlinkingCursor></BlinkingCursor>
    </div>
  );
}

export default About;
