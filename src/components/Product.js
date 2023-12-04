import ProjectCard from "./ProjectCard";

function Product() {
  return (
    <div className="project-page">
      <h1>Checkout my projects!</h1>
      <div className="project-container">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}

export default Product;
