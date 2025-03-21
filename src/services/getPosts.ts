import axios from "axios";
import { TPost } from "../types/post.type";

export const getPosts = async () => {
  const response = await axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export const getPostById = (id: number) => {
  return axios.get<TPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
}