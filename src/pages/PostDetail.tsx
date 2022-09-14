import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createComment, getPostById } from "../api";
import { PostType } from "../type";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useRecoilValue } from "recoil";

import Profile from "../components/common/Profile";
import { userState } from "../store";
import Like from "../components/postDetail/Like";
import { IoMdSend } from "react-icons/io";

const PostDetail = () => {
  //@ts-ignore
  const [post, setPost] = useState<PostType>({});
  const [comment, setComment] = useState<string>("");

  const user = useRecoilValue(userState);

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(postId || "")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [postId]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createComment(comment, post._id).then(() => {
      alert("등록되었습니다.");
      setComment("");
      window.location.reload();
    });
  };

  return post.content ? (
    <div className="w-full flex md:block h-[100vh]">
      <div className="bg-[#101010] w-[55%] flex items-center md:w-full">
        <MdOutlineCancel
          className="text-primary text-5xl absolute left-5 top-5 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="w-[100%] md:h-auto h-[660px] bg-[#D9D9D9] overflow-hidden flex justify-center">
          <img
            src={post.imgUrl ? post.imgUrl : ""}
            alt=""
            className="h-[100%] object-scale-down"
          />
        </div>
      </div>
      <div className="bg-[#f2f2f2] w-[45%] md:w-full p-10 md:p-5">
        <div className="flex justify-between ">
          <Profile
            inHeader={false}
            userName={post.author.userName}
            _id={post.author._id}
          />
          <span className="text-md">{moment(post.createdAt).fromNow()}</span>
        </div>
        <div className="w-full h-[50%] border-b-[1px] border-[#00000030] relative ">
          <div className="text-2xl mt-10">{post.content}</div>
          <div className="text-2xl mt-10">
            {post.tags?.map((item) => (
              <span className="hover:underline cursor-pointer">{`#${item} `}</span>
            ))}
          </div>
          <Like
            postId={post._id}
            like={post.like?.includes(user._id)}
            likeNum={post.like?.length}
          />
        </div>
        <div className="relative mt-4">
          <form onSubmit={handleSubmit}>
            <span className="font-bold mr-2 text-xl sm:hidden">
              {user.userName}
            </span>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력해보세요"
              className="pl-2 py-1 text-xl focus:outline-primary sm:w-[90%] w-[70%]"
            />
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-primary ml-2 text-4xl absolute bottom-0"
            >
              <IoMdSend />
            </button>
          </form>
        </div>
        {post.comment &&
          post.comment.map((item) => (
            <div className="mt-5" key={item._id}>
              <span
                className="font-bold mr-4 cursor-pointer text-xl"
                onClick={() =>
                  navigate(
                    `/user/${post.comment && post.comment[0].author._id}`
                  )
                }
              >
                {item.author.userName}
              </span>
              <span className="text-xl">{item.content}</span>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default PostDetail;
