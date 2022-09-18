import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api";
import Profile from "../components/userDetail/Profile";
import Menu from "../components/userDetail/Menu";
import Post from "../components/userDetail/Posts";
import Liked from "../components/userDetail/Liked";
import Followers from "../components/userDetail/Followers";
import Following from "../components/userDetail/Following";

export interface userData {
  name: string;
  userName: string;
  posts: { _id: string; imgUrl: string }[];
  likes: { _id: string; imgUrl: string }[];
  following: { username: string }[];
  followedBy: { username: string }[];
}

const UserDetail = () => {
  const [menu, setMenu] = useState<string>("post");
  const [userData, setUserData] = useState<userData>();
  const { userId } = useParams();

  useEffect(() => {
    getUserById(userId || "")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  console.log(userData);

  return (
    <>
      <Profile
        name={userData?.name || ""}
        userName={userData?.userName || ""}
        postNum={userData?.posts?.length || 0}
        followerNum={userData?.followedBy?.length || 0}
        followingNum={userData?.following?.length || 0}
      />
      <Menu menu={menu} setMenu={setMenu} />
      {menu === "post" && <Post posts={userData?.posts} />}
      {menu === "liked" && <Liked likes={userData?.likes} />}
      {menu === "followers" && <Followers />}
      {menu === "following" && <Following />}
    </>
  );
};

export default UserDetail;
