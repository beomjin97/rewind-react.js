import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Upload from "./pages/Upload";
import UserDetail from "./pages/UserDetail";
import Main from "./components/common/Main";
import Update from "./pages/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="user/:userId" element={<UserDetail />} />
        <Route path="upload" element={<Upload />} />
        <Route path="update/:postId" element={<Update />} />
      </Route>
      <Route path="auth" element={<Auth />} />
      <Route path="post/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
