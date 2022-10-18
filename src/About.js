import React from "react";
import BlinkingCursor from "./BlinkingCursor";

function About({ setPage }) {
  setPage("About.js");
  return (
    <div>
      <h1>Hola</h1>
      <BlinkingCursor></BlinkingCursor>
    </div>
  );
}

export default About;
