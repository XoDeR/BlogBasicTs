import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts, Post } from "../services/apiService";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-post");
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))}
      <button onClick={handleClick}>Go to new post</button>
    </div>
  );
};

export default Posts;
