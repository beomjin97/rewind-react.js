import axios from "axios";

interface NewPost {
  files?: (string | ArrayBuffer | null)[];
  content: string;
  tags: string;
}

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token") && req.headers) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const createPost = (newPost: any) => API.post("/post", newPost);
export const getPost = () => API.get("/post");
export const createComment = (comment: string, postId: string) =>
  API.post(`/post/${postId}/comment`, { comment });
export const likePost = (postId: string) => API.post(`/post/${postId}/like`);
