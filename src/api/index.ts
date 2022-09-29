import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token") && req.headers) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const createPost = (newPost: any) => API.post("/post", newPost);
export const getPost = () => API.get("/post");
export const deletePost = (postId: string) => API.delete(`/post/${postId}`);
export const editPost = (postId: string, payload: any) =>
  API.patch(`/post/${postId}`, payload);
export const likePost = (postId: string) => API.post(`/post/${postId}/like`);
export const getPostById = (postId: string) => API.get(`/post/${postId}`);

export const createComment = (comment: string, postId: string) =>
  API.post(`/post/${postId}/comment`, { comment });

export const getUserById = (userId: string) => API.get(`/user/${userId}`);
export const followUser = (followingId: string) =>
  API.post(`/user/follow/${followingId}`);
