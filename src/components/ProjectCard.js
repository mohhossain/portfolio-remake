const card = {
  minWidth: "10rem",
  width: "15rem",
  margin: "1rem",
  border: "1px solid rgb(220 208 63)",
  //   backgroundColor: "#000",
  borderRadius: "10px",
  overflow: "hidden",
  padding: "1.5rem",
  color: "white",
  fontFamily: "Montserrat",
};

const pStyle = {
  color: "rgb(220 208 63)",
  fontFamily: "Montserrat",
  fontSize: "1.1rem",
};

const buttonStyle = {
  backgroundColor: "rgb(220 208 63)",
  color: "black",
  border: "none",
  borderRadius: "5px",
  padding: "0.5rem 1rem",
  fontFamily: "Montserrat",
  fontSize: "1rem",
  cursor: "pointer",
};

function ProjectCard({ project }) {
  return (
    <div style={card}>
      <div className="card-body">
        <h3 className="card-title">Project Name</h3>
        <p style={pStyle} className="card-text">
          Social Media App. Built with React, Redux, and Firebase.
        </p>

        <button style={buttonStyle}>View</button>
      </div>
    </div>
  );
}

export default ProjectCard;
