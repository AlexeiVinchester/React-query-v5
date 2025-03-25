import axios from "axios";
import { TPost } from "../types/post.type";

class Posts {
  private URL = 'https://jsonplaceholder.typicode.com/posts';

  async getPosts() {
    const response = await axios.get<TPost[]>(this.URL);
    return response.data;
  };

  getPostById(id: number) {
    return axios.get<TPost>(`${this.URL}/${id}`);
  };

  async createNewPost(post: Omit<TPost, 'id'>) {
    const response = await axios.post(this.URL, post);
    return response;
  };
}

export const postsService = new Posts()
