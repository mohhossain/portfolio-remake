import React from "react";
import "../css/Github.css";

import GithubProfile from "./GithubProfile";
import Repos from "./Repos";

function Github() {
  return (
    <div className="main-body">
      <div className="container">
        <GithubProfile></GithubProfile>
        <Repos></Repos>
      </div>
    </div>
  );
}

export default Github;
