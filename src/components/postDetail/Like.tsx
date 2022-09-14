import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { likePost } from "../../api";

interface Props {
  like: boolean;
  likeNum: number;
  postId: string;
}

const Like = ({ like, likeNum, postId }: Props) => {
  const [islike, setIslike] = useState<boolean>(like);
  const [likes, setLikes] = useState<number>(likeNum);

  const handleLike = () => {
    setIslike((prev) => !prev);
    setLikes((prev) => prev + 1);
    likePost(postId).then((res) => console.log(res.data.message));
  };

  const handleLikeCancel = () => {
    setIslike((prev) => !prev);
    setLikes((prev) => prev - 1);
    likePost(postId).then((res) => console.log(res.data.message));
  };

  return (
    <div className="flex absolute bottom-2 mt-2 md:relative ">
      {islike ? (
        <IoMdHeart
          className="text-primary text-4xl cursor-pointer"
          onClick={handleLikeCancel}
        />
      ) : (
        <IoMdHeartEmpty
          className=" text-4xl cursor-pointer"
          onClick={handleLike}
        />
      )}
      <span className="ml-2 text-2xl">{likes}</span>
    </div>
  );
};

export default Like;
