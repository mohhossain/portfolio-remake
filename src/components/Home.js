import React, { useState, useEffect } from "react";
// import BlinkingCursor from "./BlinkingCursor";
// import Portrait from "./assets/portrait.png";
import Typewriter from "typewriter-effect";
import "../css/About.css";

function Home({ setPage }) {
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
                .callFunction(() => {})
                .typeString("Mohammad Hossain ")
                .deleteChars(17)
                .typeString("a full-stack developer")
                .pauseFor(2500)
                .callFunction(() => {})
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

export default Home;
