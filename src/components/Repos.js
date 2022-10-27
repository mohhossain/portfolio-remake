import React from "react";
import "../css/Github.css";
import repositories from "../assets/Repositories.json";

function Repos() {
  return (
    <div>
      <div className="repo-section">
        {repositories.map((repo) => {
          return (
            <div className="repo">
              <a href={repo.link}>{repo.name}</a>
              <p>
                <span className={repo.language}></span>
                {repo.language}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Repos;
