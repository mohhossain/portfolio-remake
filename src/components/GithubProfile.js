import React from "react";
import "../css/Github.css";
import portrait from "../assets/portrait.png";
import { AiOutlineClockCircle } from "react-icons/ai";

function GithubProfile() {
  let time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  return (
    <div>
      <div className="profile-section">
        <div className="dp-name">
          <div className="dp-container">
            <div className="dp">
              <img
                className="dp-image"
                src={portrait}
                height={350}
                style={{ overflow: "hidden" }}
              ></img>
            </div>
          </div>

          <div className="username">
            <h2>Mohammad Hossain</h2>
            <p>mohhossain</p>
          </div>
        </div>

        <button
          className="follow-button"
          style={{ width: "100%" }}
          onClick={() => {
            window.open(
              "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fmohhossain",
              "_blank"
            );
          }}
        >
          Follow
        </button>

        <p>
          <AiOutlineClockCircle className="clock" />
          {time} (Eastern Time)
        </p>
      </div>
    </div>
  );
}

export default GithubProfile;
