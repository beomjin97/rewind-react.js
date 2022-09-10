import React, { useState } from "react";
import Profile from "../components/userDetail/Profile";
import Menu from "../components/userDetail/Menu";
import Post from "../components/userDetail/Posts";
import Liked from "../components/userDetail/Liked";
import Followers from "../components/userDetail/Followers";
import Following from "../components/userDetail/Following";

const UserDetail = () => {
  const [menu, setMenu] = useState<string>("post");

  return (
    <>
      <Profile />
      <Menu menu={menu} setMenu={setMenu} />
      {menu === "post" && <Post />}
      {menu === "liked" && <Liked />}
      {menu === "followers" && <Followers />}
      {menu === "following" && <Following />}
    </>
  );
};

export default UserDetail;
