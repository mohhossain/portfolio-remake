function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p className="card-text">{project.description}</p>

        <button onClick={() => window.open(project.link)}>View</button>
      </div>
    </div>
  );
}

export default ProjectCard;
