import { useState } from "react";
import Profile from "../common/Profile";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineAddComment } from "react-icons/md";
import axios from "axios";

interface props {
  postId: string;
}

const Post = ({ postId }: props) => {
  const iconStyle = "text-primary text-3xl cursor-pointer";
  const [like, setLike] = useState<boolean>(false);
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/post/${postId}/comment`, comment);
  };

  return (
    <div className="w-[calc(100vw-24px)] max-w-[660px] py-2 border-b-2 border-[#00000030] box-content">
      <Profile inHeader={false} />
      <div className="w-[100%] h-[400px] bg-[#00000030] my-2"></div>
      <div className="flex justify-between my-2">
        <div className="flex">
          {like ? (
            <IoMdHeart className={iconStyle} onClick={() => setLike(false)} />
          ) : (
            <IoMdHeartEmpty
              className={iconStyle}
              onClick={() => setLike(true)}
            />
          )}
          <MdOutlineAddComment
            className={iconStyle}
            onClick={() => setIsInputActive((prev) => !prev)}
          />
        </div>
        <div className="text-[12px] leading-[30px]">3시간전</div>
      </div>
      {isInputActive && (
        <div className="my-2">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setComment(e.target.value)} />
            <button type="submit" onSubmit={handleSubmit}>
              입력
            </button>
          </form>
        </div>
      )}
      <div>from earth to you</div>
      <div>#seoul #happy</div>
      <div className="my-2">
        <span className="font-bold mr-2">colorless</span>color is colorless
      </div>
    </div>
  );
};

export default Post;
