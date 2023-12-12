import React from "react";

function PhotoCard(props) {
  console.log(props);
  return (
    <div
      className="photo-container"
      onClick={() => window.open(props.photo.link)}
    >
      <img height={props.photo.height / 10} width={400} src={props.photo.src} />
    </div>
  );
}

export default PhotoCard;
