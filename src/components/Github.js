import React from "react";
import "../css/Github.css";
import portrait from "../assets/portrait.png";

function Github() {
  let time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  console.log(time);
  return (
    <div className="main-body">
      <div className="container">
        <div className="profile-section">
          <h1>profile</h1>
          <div className="dp">
            <img
              className="dp-image"
              src={portrait}
              height={350}
              style={{ overflow: "hidden" }}
            ></img>
          </div>

          <div className="username">
            <h2>Mohammad Hossain</h2>
            <p>mohhossain</p>
          </div>
          <button className="follow-button" style={{ width: "100%" }}>
            Follow
          </button>
        </div>

        <div className="repo-section">
          <h1>repo</h1>
        </div>
      </div>
    </div>
  );
}

export default Github;
