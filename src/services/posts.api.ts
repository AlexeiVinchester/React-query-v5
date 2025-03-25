import axios from "axios";
import { TPost } from "../types/post.type";

const URL = 'https://jsonplaceholder.typicode.com/posts';

class PostsService {
  async getPosts() {
    const response = await axios.get<TPost[]>(URL);
    return response.data;
  };

  getPostById(id: number) {
    return axios.get<TPost>(`${URL}/${id}`);
  };

  async createNewPost(post: Omit<TPost, 'id'>) {
    const response = await axios.post(URL, post);
    return response.data;
  };
}

export const postsService = new PostsService();
