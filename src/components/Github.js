import React, { useEffect } from "react";
import "../css/Github.css";

import GithubProfile from "./GithubProfile";
import Repos from "./Repos";

function Github({ setPage }) {
  useEffect(() => {
    setPage("Github.js");
  }, []);
  return (
    <div className="main-body">
      <div className="git-container">
        <GithubProfile></GithubProfile>
        {/* <Repos></Repos> */}
      </div>
    </div>
  );
}

export default Github;
