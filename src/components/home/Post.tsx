import { useState } from "react";
import Profile from "../common/Profile";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineAddComment } from "react-icons/md";
import axios from "axios";
import { IoMdSend } from "react-icons/io";

interface PostType {
  _id: string;
  content: string;
  author: string;
  imgUrl?: string[];
  like?: string[];
  tags?: string[];
  comment?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  const iconStyle = "text-primary text-3xl cursor-pointer";
  const [like, setLike] = useState<boolean>(false);
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/post/${post._id}/comment`, comment);
  };

  return (
    <div className="w-[calc(100vw-24px)] max-w-[660px] py-2 border-b-2 border-[#00000030] box-content">
      <Profile inHeader={false} />
      <div className="w-[100%] h-[0] bg-[#00000030] my-2 pb-[56%]">
        <img src={post.imgUrl ? post.imgUrl[0] : ""} alt="" />
      </div>
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

      <div>from earth to you</div>
      <div>#seoul #happy</div>
      <div className="my-2">
        <span className="font-bold mr-2">colorless</span>color is colorless
      </div>
      {isInputActive && (
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <span className="font-bold mr-2">beomjin_97</span>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력해보세요"
              className="pl-2 focus:outline-primary w-[70%]"
            />
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-primary ml-2 text-2xl absolute bottom-0"
            >
              <IoMdSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
