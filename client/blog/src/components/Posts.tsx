import React from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-post");
  };

  return (
    <div>
      Posts
      <button onClick={handleClick}>Go to new post</button>
    </div>
  );
};

export default Posts;
