function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-body">
        <h2 className="card-title">Project Name</h2>
        <p className="card-text">
          Social Media App. Built with React, Redux, and Firebase.
        </p>

        <button>View</button>
      </div>
    </div>
  );
}

export default ProjectCard;
