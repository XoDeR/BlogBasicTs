import React from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      NewPost<button onClick={handleClick}>Go to posts</button>
    </div>
  );
};

export default NewPost;
