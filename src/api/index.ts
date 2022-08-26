import axios, { AxiosRequestHeaders } from "axios";

interface NewPost {
  photos: string[];
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

export const createPost = (newPost: NewPost) => API.post("/post", newPost);
export const getPost = () => API.get("/post");
