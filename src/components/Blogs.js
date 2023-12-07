import React from "react";
import { useState, useEffect } from "react";

function Blogs({ setPage }) {
  useEffect(() => {
    setPage("Blogs.py");
  }, []);
  //   setPage("Blogs");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mohhossain", {})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="blog-container">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="blog-card">
            <img src={blog.cover_image} alt="blog cover image" />
            <h1>{blog.title}</h1>
            <p className="minutes-read">
              {blog.reading_time_minutes} minutes read
            </p>
            <p>
              {blog.tag_list.map((tag) => {
                return <span className="tag">#{tag} </span>;
              })}
            </p>

            <p className="reactions">
              {blog.positive_reactions_count} reactions
            </p>
            <a href={blog.url} target="_blank" rel="noreferrer">
              Read
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
