import React from "react";

function PhotoCard(props) {
  return (
    <div className="photo-container">
      <img height={props.photo.height / 10} width={400} src={props.photo.src} />
    </div>
  );
}

export default PhotoCard;
