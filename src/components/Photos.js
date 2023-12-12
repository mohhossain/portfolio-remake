import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const textStyle = {
  headerStyle: {
    fontSize: "26px",
    padding: "5px",
  },

  pStyle: {
    padding: "5px",
    fontSize: "15px",
  },
};

function Photos({ setPage }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPage("Photos.js");

    const url = `https://api.unsplash.com/users/mohhossain/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;

    const fetchPhotos = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // only add the urls to the array
      const photoUrls = data.map((photo) => {
        const imageObject = {
          src: photo.urls.regular,
          width: photo.width,
          height: photo.height,
          caption: photo.description,
          link: photo.links.html,
          //   height: photo.height,
        };
        return imageObject;
      });
      setPhotos(photoUrls);
    };
    fetchPhotos();
  }, []);
  //   setPage("Photos.js");
  return (
    <div className="photo-page">
      <h1 style={textStyle.headerStyle}>Through my lens</h1>
      <p style={textStyle.pStyle}>
        I love taking photos. I don't have a fancy camera, but I do have a
        phone. I take photos of everything, and I mean everything. I love
        capturing moments, and I love looking back at them. I have a lot of
        photos, and I want to share them with you. I hope you enjoy them as much
        as I do.
      </p>

      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoCard photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
}

// const styles = {
//   main_container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "black",
//     color: "white",
//     // width: "100vw",
//     // height: "100vh",
//   },

//   pin_container: {
//     margin: 0,
//     padding: 0,
//     width: "60%",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//     height: "100%",
//     gridAutoRows: "10px",
//     justifyContent: "center",
//     backgroundColor: "black",
//   },
// };

export default Photos;
