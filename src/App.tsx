import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Upload from "./pages/Upload";
import UserDetail from "./pages/UserDetail";
import Main from "./components/common/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="user/:userId" element={<UserDetail />} />
        <Route path="upload" element={<Upload />} />
      </Route>
      <Route path="auth" element={<Auth />} />
      <Route path="post/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
