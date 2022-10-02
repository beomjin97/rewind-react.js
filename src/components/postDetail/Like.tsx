import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { likePost } from "../../api";

interface Props {
  like: boolean;
  likeNum: number;
  postId: string;
}

const Like = ({ like, likeNum, postId }: Props) => {
  const [islike, setIslike] = useState<boolean>(like);
  const [likes, setLikes] = useState<number>(likeNum);

  const navigate = useNavigate();

  const handleLike = () => {
    setIslike((prev) => !prev);
    setLikes((prev) => prev + 1);
    likePost(postId)
      .then((res) => console.log(res.data.message))
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/auth");
      });
  };

  const handleLikeCancel = () => {
    setIslike((prev) => !prev);
    setLikes((prev) => prev - 1);
    likePost(postId)
      .then((res) => console.log(res.data.message))
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/auth");
      });
  };

  return (
    <div className="flex mt-2">
      {islike ? (
        <IoMdHeart
          className="text-4xl cursor-pointer text-primary"
          onClick={handleLikeCancel}
        />
      ) : (
        <IoMdHeartEmpty
          className="text-4xl cursor-pointer "
          onClick={handleLike}
        />
      )}
      <span className="ml-2 text-2xl">{likes}</span>
    </div>
  );
};

export default Like;
