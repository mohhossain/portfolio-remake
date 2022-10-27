import React, { useState, useEffect } from "react";
// import BlinkingCursor from "./BlinkingCursor";
// import Portrait from "./assets/portrait.png";
import Typewriter from "typewriter-effect";
import "../css/About.css";

function About({ setPage }) {
  return (
    <div className="About">
      <div className="hello-text">
        <h1 className="hello-world">Hello, World!</h1>
        <h1 className="hello-world"> Hello, World!</h1>
      </div>
      <div className="bio">
        <h3>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I am ")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .typeString("Mohammad Hossain ")
                .deleteChars(17)
                .typeString("a full-stack developer")
                .pauseFor(2500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </h3>
      </div>
    </div>
  );
}

export default About;
