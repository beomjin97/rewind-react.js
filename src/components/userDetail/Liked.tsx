import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  likes: { _id: string; imgUrl: string }[] | undefined;
}

const Liked = ({ likes }: Props) => {
  const navigate = useNavigate();

  return likes ? (
    <div className="flex w-[1000px] h-[350px] flex-wrap mx-auto overflow-auto scrollbar-hide">
      {likes.map((item, idx) => (
        <div
          key={idx}
          className="w-[150px] h-[150px] bg-[#00000030] m-5 overflow-hidden cursor-pointer"
          onClick={() => navigate(`/post/${item._id}`)}
        >
          <img src={item.imgUrl} alt="test" />
        </div>
      ))}
    </div>
  ) : (
    <div className="">No Post not yet</div>
  );
};

export default Liked;
