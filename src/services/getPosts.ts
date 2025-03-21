import axios from "axios";
import { TPost } from "../types/post.type";

export const getPosts = () => {
  return axios.get<TPost[]>('https://jsonplaceholder.typicode.com/posts');
};

export const getPostById = (id: number) => {
  return axios.get<TPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
}