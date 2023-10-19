/* eslint-disable no-useless-catch */
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  text: string;
}

interface PostsResponse {
  message: string;
  success: boolean;
  data: Post[];
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<PostsResponse>(
      "http://localhost:7788/api/post/get-posts"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
