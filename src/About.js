import React, { useState, useEffect } from "react";
import BlinkingCursor from "./BlinkingCursor";
import Portrait from "./assets/portrait.png";
import "./About.css";

function About({ setPage }) {
  setPage("About.js");

  const [helloWorld, setHelloWorld] = useState("");
  const [reachedEnd, setReachedEnd] = useState(false);
  const text = [
    "H",
    "e",
    "l",
    "l",
    "o",
    ",",
    " ",
    "w",
    "o",
    "r",
    "l",
    "d",
    "!",
  ];

  useEffect(() => {
    let helloText = "";
    for (let i in text) {
      setTimeout(() => {
        // helloText += text[i];
        console.log(i);
        // setHelloWorld(helloText);
      }, 5000);
    }
  }, []);

  return (
    <div className="About">
      <h1 className="hello-world">{helloWorld}</h1>
      <img src={Portrait} height={400}></img>
      <BlinkingCursor></BlinkingCursor>
    </div>
  );
}

export default About;
