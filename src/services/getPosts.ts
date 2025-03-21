import axios from "axios";
import { TPost } from "../types/post.type";

export const getPosts = async () => {
  return axios.get<TPost[]>('https://jsonplaceholder.typicode.com/postыs');
}