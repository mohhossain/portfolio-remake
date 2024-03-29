import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.js";
import React, { useEffect } from "react";

function Product({ setPage }) {
  useEffect(() => {
    setPage("Projects.js");
  }, []);
  return (
    <div className="project-page">
      <h1>Checkout my projects!</h1>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>

      <h2>Checkout my github for more cool projects and codes!</h2>
    </div>
  );
}

export default Product;
