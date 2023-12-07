import "../css/About.css";
import React, { useEffect } from "react";
function About({ setPage }) {
  useEffect(() => {
    setPage("About.md");
  }, []);
  return (
    <div className="about">
      <div className="bio">
        <h1>Hi, I am Mohammad 👋!</h1>
        <p>
          I am a software engineer based in New York City. I build web and
          mobile apps. I am fluent in Javascript, Python, and Rails.
        </p>
        <br />
        <p>
          I am passionate about building products that are scalable, accessible,
          cutting-edge, and user-friendly.
        </p>
      </div>
    </div>
  );
}

export default About;
