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
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 items-start justify-center">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 border rounded shadow-md max-w-lg mx-auto"
        >
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-600">{post.text}</p>
        </div>
      ))}
      <button
        className="p-4 border rounded shadow-md max-w-lg mx-auto"
        onClick={handleClick}
      >
        New post
      </button>
    </div>
  );
};

export default Posts;
